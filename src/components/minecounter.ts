import Table from '../lib/table';
import { Cell, CellContent } from './cell';

class MineCounter {
    /** Populates cells around mines with the correct counts */
    static count(cols: number, board: Cell[]): Cell[] {
        const table = new Table(cols, board.length);
        const cBoard = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i].isAMine()) {
                cBoard[i] = new Cell({ content: CellContent.Mine });
            } else {
                const adjacentMineCount = table.getAdjacentIndexes(i)
                    .map(cellIndex => board[cellIndex])
                    .filter(cell => cell.isAMine()).length;
                cBoard[i] = new Cell({ content: adjacentMineCount });
            }
        }
        return cBoard;
    }
}

export default MineCounter;