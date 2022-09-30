import React from 'react';
import ReactDOM from 'react-dom/client';
import Examples from './components/Examples/Examples';
import Footer from './components/Footer/Footer';
import Gift from './components/Gift/Gift';
import Header from './components/Header/Header';
import Machine from './components/Machine/Machine';
import Personal from './components/Personal/Personal';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Machine/>
    <Examples/>
    {/* <Gift/>
    <Personal/> */}
    <Footer/>
  </React.StrictMode>
);
