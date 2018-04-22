import Cell from './cell';
import Board from './board';

class Game {
    private board: Board;

    start(boardState: Array<Cell>) {
        this.board = new Board(boardState);
        this.board.closeAllCells();
    }

    openCell(index: number) { this.board.openCell(index); }
    boardIsEmpty(): boolean { return this.board.isEmpty(); }
    allBoardCellsClosed(): boolean { return this.board.allCellsClosed(); }
    boardCellIsClosed(index: number): boolean { return this.board.cellIsClosed(index); }
}

export default Game;