import React from 'react';
import Nav from './pages/components/Nav';
import Footer from './pages/components/Footer';
import '../src/styles.scss';

const App = () => {
  return (
    <div className="appContainer">
      <div className="appWrapper">
        <Nav />
        <Footer />
      </div>
    </div>
  );
};

export default App;
