import Game from '../components/game';
import { Cell, CellContent } from '../components/cell';

let game: Game = new Game();
beforeEach(() => game = new Game());

test('start sets game board', () => {
    game.start(oneMineTopCenterBoard());

    expect(game.board).not.toBe([]);
});

test('start closes every cell', () => {
    const board = oneMineTopCenterBoard();
    board[0].open();
    game.start(board);

    game.board.forEach((cell) => { expect(cell.isClosed()).toBe(true); });
});

function oneMineTopCenterBoard(): Array<Cell> {
    return [
        new Cell(CellContent.One), new Cell(CellContent.Mine), new Cell(CellContent.One),
        new Cell(CellContent.One), new Cell(CellContent.One), new Cell(CellContent.One),
        new Cell(CellContent.Empty), new Cell(CellContent.Empty), new Cell(CellContent.Empty)
    ];
}