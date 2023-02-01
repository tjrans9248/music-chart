import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/components/Nav';
import Slides from './pages/components/Slides';
import Contents from './pages/components/Contents';
import Footer from './pages/components/Footer';
import '../src/styles.scss';

const App = () => {
  return (
    <div className="appContainer">
      <div className="appWrapper">
        <Nav />
        {/* <Slides />
        <Contents /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default App;
