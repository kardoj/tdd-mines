import { Cell, CellContent } from './cell';

class BoardGenerator {
    static generate(cols: number, rows: number, mines: number = 0): Cell[] {
        let board = new Array(cols * rows).fill(new Cell(CellContent.Empty));
        return board;
    }
}

export default BoardGenerator;