import Table from './table';

let table: Table;
beforeEach(() => table = new Table(3, 9));

test('gives correct top left corner indexes', () => {
    expect(table.getAdjacentIndexes(0)).toEqual([1, 3, 4]);
});

test('gives correct top right corner indexes', () => {
    expect(table.getAdjacentIndexes(2)).toEqual([1, 4, 5]);
});

test('gives correct bottom left corner indexes', () => {
    expect(table.getAdjacentIndexes(6)).toEqual([3, 4, 7]);
});

test('gives correct bottom right corner indexes', () => {
    expect(table.getAdjacentIndexes(8)).toEqual([4, 5, 7]);
});

test('gives correct left column indexes', () => {
    expect(table.getAdjacentIndexes(3)).toEqual([0, 1, 4, 6, 7]);
});

test('gives correct right column indexes', () => {
    expect(table.getAdjacentIndexes(5)).toEqual([1, 2, 4, 7, 8]);
});

test('gives correct top row indexes', () => {
    expect(table.getAdjacentIndexes(1)).toEqual([0, 2, 3, 4, 5]);
});

test('gives correct bottom row indexes', () => {
    expect(table.getAdjacentIndexes(7)).toEqual([3, 4, 5, 6, 8]);
});