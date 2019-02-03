import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SortList from 'pages/SortList';
import MyTabs from 'pages/MyTabs';
import Markdown from 'pages/Markdown';
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <Route path="/updown" component={SortList} />
      <Route path="/tabs" component={MyTabs} />
      <Route path="/markdown" component={Markdown} />
    </div>
  </Router>
);

export default App;