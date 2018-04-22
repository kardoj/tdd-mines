import { CellContent, Game } from '../components/game';

test('start sets game board', () => {
    const game = new Game();
    game.start(oneMineTopCenter());

    expect(game.board).not.toBe(null);
});

function oneMineTopCenter(): Array<CellContent> {
    return [
        CellContent.One, CellContent.Mine, CellContent.One,
        CellContent.One, CellContent.One, CellContent.One,
        CellContent.Empty, CellContent.Empty, CellContent.Empty
    ];
}