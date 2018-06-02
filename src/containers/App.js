import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import Timer from '../components/Timer';
import Button from '../components/Button';

const App = ({ store }) => (
  <Provider store={store}>
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
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default App;
