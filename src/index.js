import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

// console.log({pattern1})
ReactDOM.render(
  // <Matrix values={pattern1} />,
  <Matrix />,
  document.getElementById('root')
);
