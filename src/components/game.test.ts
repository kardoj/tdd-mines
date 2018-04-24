import Game from '../../src/components/game';
import { Cell, CellContent } from '../../src/components/cell';

let game: Game;
beforeEach(() => game = new Game());

test('start sets game board', () => {
    game.start(3, oneMineTopCenterBoard());

    expect(game.boardIsEmpty()).not.toEqual(true);
});

test('start sets game running', () => {
    game.start(3, oneMineTopCenterBoard());

    expect(game.isRunning()).toEqual(true);
});

test('start closes every cell', () => {
    const board = oneMineTopCenterBoard();
    board[0].open();
    game.start(3, board);

    expect(game.allCellsClosed()).toEqual(true);
});

test('opens a cell', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(0);

    expect(game.cellIsClosed(0)).toEqual(false);
});

test('opens a cell that does not exist', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(69);

    expect(game.cellIsClosed(69)).toEqual(false);
});

test('opening an empty cell on the bottom row opens adjacent empty and number cells', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(7);

    for (let i = 0; i < 9; i++) {
        if (i < 3) {
            expect(game.cellIsClosed(i)).toEqual(true);
        } else {
            expect(game.cellIsClosed(i)).toEqual(false);
        }
    }
});

test('the game is lost when a mine is opened', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(1);

    expect(game.isLost()).toEqual(true);
});

test('game is running when one non-mine cell is closed', () => {
    const board = oneMineTopCenterBoard();
    game.start(3, board);
    game.openCell(8);
    game.openCell(7);
    game.openCell(6);
    game.openCell(5);
    game.openCell(4);
    game.openCell(3);
    game.openCell(2);

    expect(game.isRunning()).toEqual(true);
});

test('game is won when the last non-mine cell is opened', () => {
    const board = oneMineTopCenterBoard();
    game.start(3, board);
    game.openCell(8);
    game.openCell(7);
    game.openCell(6);
    game.openCell(5);
    game.openCell(4);
    game.openCell(3);
    game.openCell(2);
    game.openCell(0);

    expect(game.isWon()).toEqual(true);
});

function oneMineTopCenterBoard(): Array<Cell> {
    return [
        new Cell(CellContent.One), new Cell(CellContent.Mine), new Cell(CellContent.One),
        new Cell(CellContent.One), new Cell(CellContent.One), new Cell(CellContent.One),
        new Cell(CellContent.Empty), new Cell(CellContent.Empty), new Cell(CellContent.Empty)
    ];
}