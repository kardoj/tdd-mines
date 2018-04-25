import BoardStateGenerator from './boardstategenerator';

test('generates a 3 by 3 board', () => {
    expect(BoardStateGenerator.generate(3, 3, 1).length).toEqual(9);
});

test('generated 3 by 3 board has 3 mines', () => {
    expect(BoardStateGenerator.generate(3, 3, 3).filter(cell => cell.isAMine()).length).toEqual(3);
});

test('boardgenerator counts mines', () => {
    expect(BoardStateGenerator.generate(3, 3, 3).filter(cell => !(cell.isAMine() || cell.isEmpty())).length).not.toEqual(0);
});