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
    
    closeAllCells() {
        this.cells.forEach((cell) => { cell.close(); });
    }

    openCell(index: number) {
        if (this.cellDoesNotExist(index)) return;
        const cell = this.cells[index];
        cell.open();
        if (cell.isEmpty()) this.openAdjacentEmptyAndNumberCells(index);
    }

    flagCell(index: number) {
        this.cells[index].isFlagged = true;
    }

    cellIsClosed(index: number): boolean {
        if (this.cellDoesNotExist(index)) return false; // TODO: Needs a test
        return this.cells[index].isClosed();
    }

    cellIsFlagged(index: number): boolean {
        return this.cells[index].isFlagged;
    }

    isEmpty() {
        return this.cells.length === 0;
    }

    allCellsClosed(): boolean {
        for (let i = 0; i < this.cells.length; i++) {
            if (!this.cells[i].isClosed()) {
                return false;
            }
        }
        return true;
    }

    cellIsAMine(index: number): boolean {
        if (this.cellDoesNotExist(index)) return false; // TODO: Needs a test
        return this.cells[index].isAMine();
    }

    allClosedCellsAreMines(): boolean {
        for (let i = 0; i < this.cells.length; i++) {
            const cell = this.cells[i];
            if (cell.isClosed() && !cell.isAMine()) return false;
        }
        return true;
    }

    private cellDoesNotExist(index: number): boolean {
        return this.cells[index] === undefined;
    }

    /** Opens all adjacent empty and number cells recursively */
    private openAdjacentEmptyAndNumberCells(index: number) {
        const adjacentIndexes = this.table.getAdjacentIndexes(index);
        for (let i = 0; i < adjacentIndexes.length; i++) {
            const cell = this.cells[adjacentIndexes[i]];
            if (cell.isEmpty() || cell.isANumber()) cell.open();

            if (cell.isEmpty() && cell.isClosed()) {
                this.openAdjacentEmptyAndNumberCells(adjacentIndexes[i]);
            }
        }
    }
}

export default Board;