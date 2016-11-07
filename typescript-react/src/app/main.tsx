import * as React from 'react';
import * as ReactDOM from 'react-dom';

import LimitedLengthTextBox from './LimitedLengthTextBox';

import '../index.html';

ReactDOM.render(
  <LimitedLengthTextBox showCounter={true} length={20} />,
  document.getElementById('app')
);
