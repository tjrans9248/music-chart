/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Content from './Content';
import axios from 'axios';

const Contents = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true);
  const obsRef = useRef(null);
  const endRef = useRef(false);

  useEffect(() => {
    getPost();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (page !== 1) getPost();
  }, [page]);

  const obsHandler = entries => {
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };

  const getPost = useCallback(async () => {
    //글 불러오기
    setLoad(true); //로딩 시작
    const res = await axios({
      url: './data/content.json',
    });
    console.log(res);
    if (res.data) {
      if (res.data.end) {
        endRef.current = true;
      }
      setList(prev => [...prev, ...res.data]);
      preventRef.current = true;
    } else {
      console.log(res);
    }
  }, [page]);

  return (
    <div className="contentsTitle">
      <p>음반 차트</p>
      <div className="albumCharts">
        <span>앨범 정보</span>
        <span>순위</span>
      </div>

      {list.map((aContent, i) => (
        <Content key={i} aContent={aContent} />
      ))}
      {load ? <div>로딩 중...</div> : <></>}
      <div ref={obsRef}>옵저버 Element</div>
    </div>
  );
};

export default Contents;
