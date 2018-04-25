import * as React from 'react';
import Board from './board';
import BoardStateGenerator from './boardstategenerator';

enum GameState {
    IsRunning,
    IsLost,
    IsWon
}

class Game extends React.Component {
    private cols: number;
    private rows: number;
    private mines: number;
    private board: Board;
    private gameState: GameState;

    constructor(props: any) {
        super(props);
        this.cols = 10;
        this.rows = 10;
        this.mines = 20;

        if (props.cols) this.cols = props.cols;
        if (props.boardState) this.board = new Board({ cols: this.cols, boardState: props.boardState });
        if (!this.board) this.board = new Board({ cols: props.cols, boardState: BoardStateGenerator.generate(this.cols, this.rows, this.mines) });
        this.gameState = GameState.IsRunning;
    }

    openCell(index: number) {
        this.board.openCell(index);

        if (this.board.cellIsAMine(index)) {
            this.gameState = GameState.IsLost;
            return;
        }

        if (this.board.allClosedCellsAreMines()) {
            this.gameState = GameState.IsWon;
        }
    }

    flagCell(index: number) {
        if (!this.cellIsClosed(index)) return;
        return this.board.flagCell(index);
    }
    
    unflagCell(index: number) { return this.board.unflagCell(index); }
    allCellsClosed(): boolean { return this.board.allCellsAreClosed(); }
    cellIsClosed(index: number): boolean { return this.board.cellIsClosed(index); }
    cellIsFlagged(index: number): boolean { return this.board.cellIsFlagged(index); }
    isWon(): boolean { return this.gameState === GameState.IsWon; }
    isLost(): boolean { return this.gameState === GameState.IsLost; }
    isRunning(): boolean { return this.gameState === GameState.IsRunning; }

    render(): JSX.Element {
        return (<div>{this.board.render()}</div>);
    }
}

export default Game;