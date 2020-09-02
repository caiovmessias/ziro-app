import React from 'react';
import {render} from 'react-dom';
import Router from './routers/routes';
import './styles/App.css';

const App = () => (
  <Router />
);
render(<App />, document.getElementById('app'));