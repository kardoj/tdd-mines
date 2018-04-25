import { Cell, CellContent } from './cell';
import MineCounter from './minecounter';

test('counts mines on 3 by 3 board with 3 mines', () => {
    const boardBeforeCount = [
        new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.Empty }),
        new Cell({ content: CellContent.Empty }), new Cell({ content: CellContent.Empty }), new Cell({ content: CellContent.Empty }),
        new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.Empty }), new Cell({ content: CellContent.Empty })
    ];

    const boardAfterCount = [
        new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.One }),
        new Cell({ content: CellContent.Three }), new Cell({ content: CellContent.Three }), new Cell({ content: CellContent.One }),
        new Cell({ content: CellContent.Mine }), new Cell({ content: CellContent.One }), new Cell({ content: CellContent.Empty })        
    ];

    expect(MineCounter.count(3, boardBeforeCount)).toEqual(boardAfterCount);
});
