import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SortList from 'pages/SortList';
import MyTabs from 'pages/MyTabs';
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <Route path="/updown" component={SortList} />
      <Route path="/tabs" component={MyTabs} />
    </div>
  </Router>
);

export default App;