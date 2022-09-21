import React from 'react';
import ReactDOM from 'react-dom/client';
import Examples from './components/Examples/Examples';
import Header from './components/Header/Header';
import Machine from './components/Machine/Machine';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Machine/>
    <Examples/>
  </React.StrictMode>
);
