import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import App from '../../App';
import Chart from '../components/MenuTab/Chart';
import Whook from '../components/MenuTab/Whook';
import Event from '../components/MenuTab/Event';
import News from '../components/MenuTab/News';
import Store from '../components/MenuTab/Store';
import Charge from '../components/MenuTab/Charge';

const Nav = () => {
  const [currentTab, setCurrentTab] = useState('Chart');
  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navCategory">
          {TAB_ARR.map((tab, idx) => (
            <div
              className="menu"
              key={idx}
              onClick={() => {
                setCurrentTab(tab);
              }}
              alt="Menu"
            >
              {tab}
            </div>
          ))}
        </div>

        <div>{MAPPING_OBJ[currentTab]}</div>
      </div>
    </div>
  );
};

export default Nav;

const TAB_ARR = ['Chart', 'Whook', 'Event', 'News', 'Store', 'Charge'];

const MAPPING_OBJ = {
  Chart: <Chart />,
  Whook: <Whook />,
  Event: <Event />,
  News: <News />,
  Store: <Store />,
  Charge: <Charge />,
};
