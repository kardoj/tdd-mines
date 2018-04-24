import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Minesweeper from './minesweeper';

ReactDOM.render(
  <Minesweeper />,
  document.getElementById('minesweeper') as HTMLElement
);
