import React from 'react';
import Sidebar from '../components/Sidebar';
import Timer from '../components/Timer';
import Button from '../components/Button';

const App = () => (
  <div className="containers">
    <div className="sidebar-container">
      <Sidebar />
    </div>
    <div className="timer-container">
      <Timer />
    </div>
    <div className="menu-container">
      <Button />
    </div>
  </div>
);

export default App;
