import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import Header from './components/header';

window.addEventListener('load', () => {
  ReactDOM.render(<Header />, document.getElementById('mount-point'));
});
