import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SortList from 'pages/SortList';
import MyTabs from 'pages/MyTabs';
import Markdown from 'pages/Markdown';
import './App.scss';

const App = () => (
  <Router>
    <div className="app">
      <Route path="/" exact component={Index} />
      <Route path="/updown" component={SortList} />
      <Route path="/tabs" component={MyTabs} />
      <Route path="/markdown" component={Markdown} />
    </div>
  </Router>
);


const Index = () => (
  <div className="index">
    <div className="navs">
      <Link to="/updown">列表</Link>
      <Link to="/markdown">Tab切换</Link>
      <Link to="/tabs">Markdown编辑器</Link>
    </div>
  </div>
);


export default App;
