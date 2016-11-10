import * as React from 'react';
import * as ReactDOM from 'react-dom';

import LimitedLengthTextBox from './LimitedLengthTextBox';
import Root from './Root';

import '../index.html';
import 'semantic-ui/dist/semantic.min.css';


ReactDOM.render(
  <LimitedLengthTextBox length={20} showCounter={true} />,
  document.getElementById('app')
);
