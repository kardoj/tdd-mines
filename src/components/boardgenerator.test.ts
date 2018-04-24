import BoardGenerator from './boardgenerator';

test('generates a 3 by 3 board', () => {
    expect(BoardGenerator.generate(3, 3, 1).length).toEqual(9);
});

test('generated 3 by 3 board has 3 mines', () => {
    expect(BoardGenerator.generate(3, 3, 3).filter(cell => cell.isAMine()).length).toEqual(3);
});