import { CellContent, Game } from '../components/game';

test('start sets game board', () => {
    const game = new Game();
    game.start(oneMineTopCenterBoard());

    expect(game.board).not.toBe(null);
});

function oneMineTopCenterBoard(): Array<CellContent> {
    return [
        CellContent.One, CellContent.Mine, CellContent.One,
        CellContent.One, CellContent.One, CellContent.One,
        CellContent.Empty, CellContent.Empty, CellContent.Empty
    ];
}