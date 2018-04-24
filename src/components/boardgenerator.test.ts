import BoardGenerator from './boardgenerator';

test('generates a 3 by 3 board', () => {
    expect(BoardGenerator.generate(3, 3).length).toEqual(9);
});