import Cell from './cell';

class Game {
    board: Array<Cell> = [];

    start(board: Array<Cell>) {
        this.board = board;
        this.closeAllCells();
    }

    private closeAllCells() {
        this.board.forEach((cell) => { cell.close(); });
    }
}

export default Game;