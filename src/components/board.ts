import Cell from './cell';
import Table from '../lib/table';

class Board {
    private cells: Array<Cell> = [];
    private cols: number;
    private table: Table;

    constructor(cols: number, state: Array<Cell>) {
        this.cells = state;
        this.cols = cols;
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
        for (let i = 0; i < this.cells.length; i++) {
            if (!this.cells[i].isClosed()) return false;
        }
        return true;
    }

    cellIsAMine(index: number): boolean {
        return this.cells[index].isAMine();
    }

    allClosedCellsAreMines(): boolean {
        for (let i = 0; i < this.cells.length; i++) {
            const cell = this.cells[i];
            if (cell.isClosed() && !cell.isAMine()) return false;
        }
        return true;
    }

    /** Opens all adjacent empty and number cells recursively */
    private openAdjacentEmptyAndNumberCells(index: number) {
        const adjacentIndexes = this.table.getAdjacentIndexes(index);
        for (let i = 0; i < adjacentIndexes.length; i++) {
            const cell = this.cells[adjacentIndexes[i]];
            if (cell.isFlagged) return;

            if (cell.isEmpty() || cell.isANumber()) cell.open();

            if (cell.isEmpty() && cell.isClosed()) {
                this.openAdjacentEmptyAndNumberCells(adjacentIndexes[i]);
            }
        }
    }
}

export default Board;