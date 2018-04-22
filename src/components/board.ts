import Cell from './cell';

class Board {
    private cells: Array<Cell> = [];

    constructor(state: Array<Cell>) {
        this.cells = state;
    }
    
    closeAllCells() {
        this.cells.forEach((cell) => { cell.close(); });
    }

    openCell(index: number) {
        if (this.cellDoesNotExist(index)) return;
        this.cells[index].open();
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
}

export default Board;