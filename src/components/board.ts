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
        const cell = this.cells[index];
        if (cell === undefined) return;

        this.cells[index].open();
    }

    cellIsClosed(index: number): boolean {
        const cell = this.cells[index];
        if (cell === undefined) return false;
        return cell.isClosed();
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
}

export default Board;