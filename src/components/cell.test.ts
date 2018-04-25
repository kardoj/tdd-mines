import { Cell, CellContent } from './cell';

let cell: Cell;
beforeEach(() => cell = new Cell({ content: CellContent.Empty }));

test('new cell is not flagged', () => {
    expect(cell.isFlagged).not.toEqual(true);
});

test('new cell is closed', () => {
    expect(cell.isClosed()).toEqual(true);
});