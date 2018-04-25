import Randomizer from '../lib/randomizer';
import { Cell, CellContent } from './cell';
import MineCounter from './minecounter';

class BoardStateGenerator {
    static generate(cols: number, rows: number, mines: number): Cell[] {
        const minePositions = Randomizer.get(mines, 0, cols * rows);
        const board: Cell[] = [];

        const cells = cols * rows;
        for (let i = 0; i < cells; i++) {
            if (minePositions.indexOf(i) >= 0) {
                board[i] = new Cell({ content: CellContent.Mine });
            } else {
                board[i] = new Cell({ content: CellContent.Empty });
            }
        }

        return MineCounter.count(cols, board);
    }
}

export default BoardStateGenerator;