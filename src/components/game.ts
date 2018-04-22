import Cell from './cell';
import Board from './board';

enum GameState {
    IsRunning,
    IsLost,
    IsWon
}

class Game {
    private board: Board;
    private state: GameState;

    start(boardState: Array<Cell>) {
        this.board = new Board(boardState);
        this.board.closeAllCells();
        this.state = GameState.IsRunning;
    }

    openCell(index: number) {
        this.board.openCell(index);
        if (this.board.cellIsAMine(index)) this.state = GameState.IsLost;
    }

    boardIsEmpty(): boolean { return this.board.isEmpty(); }
    allCellsClosed(): boolean { return this.board.allCellsClosed(); }
    cellIsClosed(index: number): boolean { return this.board.cellIsClosed(index); }
    isLost(): boolean { return this.state === GameState.IsLost; }
    isRunning(): boolean { return this.state === GameState.IsRunning; }
}

export default Game;