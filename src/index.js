import React from 'react';
import ReactDOM from 'react-dom';
import App from './script/components/App';
import 'normalize.css/normalize.css';
import './style/base.css';

ReactDOM.render(
  <App
    pointsAvailable={60}
    attributes={[
      'availibility',
      'receptiveness',
      'documentation',
      'humility',
      'servant leadership',
      'attitude',
      'conflict resolution',
      'selflessness',
      'grit',
      'volunteerism',
      'efficiency'
    ]}
  />,
  document.getElementById('root')
);
