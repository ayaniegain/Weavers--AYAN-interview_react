import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ValueProvider from './context/ValueProvider';

ReactDOM.render(
  <ValueProvider>
    <App />
  </ValueProvider>,
  document.getElementById('root')
);
