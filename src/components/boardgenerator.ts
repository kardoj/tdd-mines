import { Cell, CellContent } from './cell';
import Randomizer from '../lib/randomizer';

class BoardGenerator {
    static generate(cols: number, rows: number, mines: number): Cell[] {
        const minePositions = Randomizer.get(mines, 0, cols * rows);
        let board: Cell[] = [];

        const cells = cols * rows;
        for (let i = 0; i < cells; i++) {
            if (minePositions.indexOf(i) >= 0) {
                board[i] = new Cell(CellContent.Mine);
            } else {
                board[i] = new Cell(CellContent.Empty);
            }
        }

        return board;
    }
}

export default BoardGenerator;