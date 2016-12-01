import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css/normalize.css';
import './index.css';

ReactDOM.render(
  <App
    pointsAvailable={40}
    attributes={[
      'strength',
      'perception',
      'endurance',
      'charisma',
      'intelligence',
      'agility',
      'luck'
    ]}
  />,
  document.getElementById('root')
);
