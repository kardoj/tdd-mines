import * as React from 'react';
import Table from '../lib/table';
import Cell from './cell';

class Board extends React.Component {
    private cells: Cell[] = [];
    private cols: number;
    private table: Table;

    constructor(props: any) {
        super(props);
        this.cells = props.boardState;
        this.cols = props.cols;
        this.table = new Table(this.cols, this.cells.length);
    }

    openCell(index: number) {
        const cell = this.cells[index];
        if (cell.isFlagged) return;
        cell.open();
        if (cell.isEmpty()) this.openAdjacentEmptyAndNumberCells(index);
    }

    flagCell(index: number) {
        this.cells[index].isFlagged = true;
    }

    unflagCell(index: number) {
        this.cells[index].isFlagged = false;
    }

    cellIsClosed(index: number): boolean {
        return this.cells[index].isClosed();
    }

    cellIsFlagged(index: number): boolean {
        return this.cells[index].isFlagged;
    }

    allCellsAreClosed(): boolean {
        for (const cell of this.cells) {
            if (!cell.isClosed()) return false;
        }
        return true;
    }

    cellIsAMine(index: number): boolean {
        return this.cells[index].isAMine();
    }

    allClosedCellsAreMines(): boolean {
        for (const cell of this.cells) {
            if (cell.isClosed() && !cell.isAMine()) return false;
        }
        return true;
    }

    render(): JSX.Element {
        return (
            <table>
                <tbody>
                    {this.renderBoardRows()}
                </tbody>
            </table>   
        );
    }

    private renderBoardRows(): JSX.Element[] {
        const rowCount = this.cells.length / this.cols;
        const rows: JSX.Element[] = [];
        for (let i = 0; i < rowCount; i++) {
            rows.push(this.renderBoardRow(i));
        }
        return rows;
    }

    private renderBoardRow(row: number): JSX.Element {
        const startIndex = row * this.cols;
        const endIndex = row * this.cols + this.cols;
        const tds: JSX.Element[] = [];
        for (let i = startIndex; i < endIndex; i++) {
            tds.push(this.cells[i].render(i));
        }
        return (<tr key={row}>{tds}</tr>);
    }

    /** Opens all adjacent empty and number cells recursively */
    private openAdjacentEmptyAndNumberCells(index: number) {
        const adjacentIndexes = this.table.getAdjacentIndexes(index);
        for (const ai of adjacentIndexes) {
            const cell = this.cells[ai];
            if (cell.isFlagged) return;

            if (cell.isEmpty() || cell.isANumber()) cell.open();

            if (cell.isEmpty() && cell.isClosed()) {
                this.openAdjacentEmptyAndNumberCells(ai);
            }
        }
    }
}

export default Board;