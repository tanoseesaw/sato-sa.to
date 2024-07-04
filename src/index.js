import React from 'react';
import { createRoot } from 'react-dom/client';
import './stylesheets/index.scss';
import Header from './components/header';

window.addEventListener('load', () => {
  createRoot(document.getElementById('mount-point')).render(<Header />);
});
