import * as React from 'react';
import BoardGenerator from './boardgenerator';
import Game from './game';

/** This is the main visual component for the game */
class Minesweeper extends React.Component {
  state: any;

  constructor(props: any) {
    super(props);

    const cols = 10;
    const mines = 20;
    const board = BoardGenerator.generate(cols, 10, mines);
    
    this.state = {
      board, 
      cols,
      game: new Game(10, board),
      mines
    };
  }

  render() {
    return (
      <table>
        <tbody>
          { /* TODO */ }
        </tbody>
      </table>
    );
  }
}

export default Minesweeper;
