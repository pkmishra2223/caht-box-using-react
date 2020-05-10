import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chat from './Chat'
import Remo from './Remo';
import Comp1 from './Comp1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
   
  <Remo/>
  </React.StrictMode>,
  document.getElementById('root')
);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
