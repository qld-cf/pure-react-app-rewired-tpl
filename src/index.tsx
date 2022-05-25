import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker'
import App from "./App"

// console.log('process.env.REACT_APP_URL', process.env.REACT_APP_URL);
// console.log('process.env', process.env);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root"))
