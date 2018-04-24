import { Cell, CellContent } from './cell';
import MineCounter from './minecounter';

test('counts mines on 3 by 3 board with 3 mines', () => {
    const boardBeforeCount = [
        new Cell(CellContent.Mine), new Cell(CellContent.Mine), new Cell(CellContent.Empty),
        new Cell(CellContent.Empty), new Cell(CellContent.Empty), new Cell(CellContent.Empty),
        new Cell(CellContent.Mine), new Cell(CellContent.Empty), new Cell(CellContent.Empty)
    ];

    const boardAfterCount = [
        new Cell(CellContent.Mine), new Cell(CellContent.Mine), new Cell(CellContent.One),
        new Cell(CellContent.Three), new Cell(CellContent.Three), new Cell(CellContent.One),
        new Cell(CellContent.Mine), new Cell(CellContent.One), new Cell(CellContent.Empty)        
    ];

    expect(MineCounter.count(3, boardBeforeCount)).toEqual(boardAfterCount);
});
