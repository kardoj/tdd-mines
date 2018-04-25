import { Cell, CellContent } from '../../src/components/cell';
import Game from '../../src/components/game';

let game: Game;
beforeEach(() => game = new Game({ cols: 3, boardState: oneMineTopCenterBoard() }));

test('new game is running', () => {
    expect(game.isRunning()).toEqual(true);
});

test('opens a cell', () => {
    game.openCell(0);

    expect(game.cellIsClosed(0)).toEqual(false);
});

test('opening an empty cell on the bottom row opens adjacent empty and number cells', () => {
    game.openCell(7);

    for (let i = 0; i < 9; i++) {
        if (i < 3) {
            expect(game.cellIsClosed(i)).toEqual(true);
        } else {
            expect(game.cellIsClosed(i)).toEqual(false);
        }
    }
});

test('opening an empty cell does not open an adjacent flagged cell', () => {
    game.flagCell(4);
    game.openCell(7);

    expect(game.cellIsClosed(4)).toEqual(true);
});

test('the game is lost when a mine is opened', () => {
    game.openCell(1);

    expect(game.isLost()).toEqual(true);
});

test('game is running when one non-mine cell is closed', () => {
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

test('flags a cell', () => {
    game.flagCell(1);

    expect(game.cellIsFlagged(1)).toEqual(true);
});

test('open cell can not be flagged', () => {
    game.openCell(0);
    game.flagCell(0);

    expect(game.cellIsFlagged(0)).toEqual(false);
});

test('flagged cell does not open', () => {
    game.flagCell(3);
    game.openCell(3);

    expect(game.cellIsClosed(3)).toEqual(true);
});

test('unflags a cell', () => {
    game.unflagCell(3);

    expect(game.cellIsFlagged(3)).toEqual(false);
});

function oneMineTopCenterBoard(): Cell[] {
    return [
        new Cell({ content: CellContent.One }), new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.One }),
        new Cell({ content: CellContent.One }), new Cell({ content: CellContent.One }), new Cell({ content: CellContent.One }),
        new Cell({ content: CellContent.Empty }), new Cell({ content: CellContent.Empty }), new Cell({ content: CellContent.Empty })
    ];
}