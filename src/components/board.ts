import Cell from './cell';

class Board {
    private cells: Array<Cell> = [];
    private cols: number;
    private rows: number;

    constructor(cols: number, state: Array<Cell>) {
        this.cells = state;
        this.cols = cols;
        this.rows = this.cells.length / this.cols;
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

    cellIsClosed(index: number): boolean {
        if (this.cellDoesNotExist(index)) return false;
        return this.cells[index].isClosed();
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
        if (this.cellDoesNotExist(index)) return false;
        return this.cells[index].isAMine();
    }

    private cellDoesNotExist(index: number): boolean {
        return this.cells[index] === undefined;
    }

    /** Opens all adjacent empty and number cells recursively */
    private openAdjacentEmptyAndNumberCells(index: number) {
        const adjacentIndexes = this.getAdjacentCells(index);
        for (let i = 0; i < adjacentIndexes.length; i++) {
            const cell = this.cells[adjacentIndexes[i]];
            if (cell.isEmpty() || cell.isANumber()) cell.open();

            if (cell.isEmpty() && cell.isClosed()) {
                this.openAdjacentEmptyAndNumberCells(adjacentIndexes[i]);
            }
        }
    }

    private getAdjacentCells(index: number): Array<number> {
        const top = index - this.cols;
        const topLeft = top - 1;
        const topRight = top + 1;
        const left = index - 1;
        const right = index + 1;
        const bottom = index + this.cols;
        const bottomLeft = bottom - 1;
        const bottomRight = bottom + 1;

        const leftColumn = index % this.cols === 0;
        const rightColumn = index % this.cols === this.cols - 1;
        const topRow = index < this.cols;
        const bottomRow = index >= this.cells.length - this.cols;
        const topLeftCorner = index === 0;
        const topRightCorner = index === this.cols - 1;
        const bottomLeftCorner = index === this.cells.length - this.cols;
        const bottomRightCorner = index === this.cells.length - 1;

        if (topLeftCorner) return [right, bottom, bottomRight];
        if (topRightCorner) return [left, bottomLeft, bottom];
        if (bottomLeftCorner) return [top, topRight, right];
        if (bottomRightCorner) return [topLeft, top, left];
        if (topRow) return [left, right, bottomLeft, bottom, bottomRight];
        if (bottomRow) return [topLeft, top, topRight, left, right];
        if (leftColumn) return [top, topRight, right, bottom, bottomRight];
        if (rightColumn) return [topLeft, top, left, bottomLeft, bottom];

        return [];
    }
}

export default Board;