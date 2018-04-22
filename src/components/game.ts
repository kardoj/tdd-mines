import Cell from './cell';
import Board from './board';

class Game {
    board: Board;

    start(boardState: Array<Cell>) {
        this.board = new Board(boardState);
        this.board.closeAllCells();
    }
}

export default Game;