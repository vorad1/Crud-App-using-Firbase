import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import Edit from './components/Edit';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from './components/Show';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
  </Routes>,
  document.getElementById('root')
  </BrowserRouter>
);


