import Game from '../components/game';
import { Cell, CellContent } from '../components/cell';

let game: Game = new Game();
beforeEach(() => game = new Game());

test('start sets game board', () => {
    game.start(oneMineTopCenterBoard());

    expect(game.boardIsEmpty()).not.toBe(true);
});

test('start closes every cell', () => {
    const board = oneMineTopCenterBoard();
    board[0].open();
    game.start(board);

    expect(game.allBoardCellsClosed()).toBe(true);
});

test('opens a cell', () => {
    game.start(oneMineTopCenterBoard());
    game.openCell(0);

    expect(game.boardCellIsClosed(0)).toBe(false);
});

test('opens a cell that does not exist', () => {
    game.start(oneMineTopCenterBoard());
    game.openCell(69);

    expect(game.boardCellIsClosed(69)).toBe(false);
});

function oneMineTopCenterBoard(): Array<Cell> {
    return [
        new Cell(CellContent.One), new Cell(CellContent.Mine), new Cell(CellContent.One),
        new Cell(CellContent.One), new Cell(CellContent.One), new Cell(CellContent.One),
        new Cell(CellContent.Empty), new Cell(CellContent.Empty), new Cell(CellContent.Empty)
    ];
}