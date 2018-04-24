import Cell from './cell';

class BoardGenerator {
    static generate(cols: number, rows: number, mines: number = 0): Cell[] {
        let board = new Array(cols * rows).fill(null);
        return board;
    }
}

export default BoardGenerator;