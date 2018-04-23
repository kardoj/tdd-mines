import Game from '../components/game';
import { Cell, CellContent } from '../components/cell';

let game: Game = new Game();
beforeEach(() => game = new Game());

test('start sets game board', () => {
    game.start(3, oneMineTopCenterBoard());

    expect(game.boardIsEmpty()).not.toBe(true);
});

test('start sets game running', () => {
    game.start(3, oneMineTopCenterBoard());

    expect(game.isRunning()).toBe(true);
});

test('start closes every cell', () => {
    const board = oneMineTopCenterBoard();
    board[0].open();
    game.start(3, board);

    expect(game.allCellsClosed()).toBe(true);
});

test('opens a cell', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(0);

    expect(game.cellIsClosed(0)).toBe(false);
});

test('opens a cell that does not exist', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(69);

    expect(game.cellIsClosed(69)).toBe(false);
});

test('the game is lost when a mine is opened', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(1);

    expect(game.isLost()).toBe(true);
});

test('opening an empty cell opens adjacent empty and number cells', () => {
    game.start(3, oneMineTopCenterBoard());
    game.openCell(7);

    for (let i = 0; i < 9; i++) {
        if (i < 3) {
            expect(game.cellIsClosed(i)).toBe(true);
        } else {
            expect(game.cellIsClosed(i)).toBe(false);
        }
    }
});

function oneMineTopCenterBoard(): Array<Cell> {
    return [
        new Cell(CellContent.One), new Cell(CellContent.Mine), new Cell(CellContent.One),
        new Cell(CellContent.One), new Cell(CellContent.One), new Cell(CellContent.One),
        new Cell(CellContent.Empty), new Cell(CellContent.Empty), new Cell(CellContent.Empty)
    ];
}