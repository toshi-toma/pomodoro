import React from 'react'
import Sidebar from '../components/Sidebar'
import Timer from '../components/Timer'

const App = () => (
  <div className="containers">
    <div className="sidebar-container">
      <Sidebar />
    </div>
    <div className="timer-container">
      <Timer />
    </div>
    <div className="menu-container" />
  </div>
)

export default App
