import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';

const setup = {
  min: 0,
  max: 10
}

ReactDOM.render(
  <App setup={setup}/>,
  document.getElementById('root')
);
