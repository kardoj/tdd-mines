enum CellContent {
    Mine,
    Empty,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight
}

enum CellStatus {
    Opened,
    Closed
}

class Cell {
    content: CellContent;
    status: CellStatus;

    constructor(content: CellContent) {
        this.content = content;
        this.status = CellStatus.Closed;
    }

    isClosed(): boolean { return this.status === CellStatus.Closed; }
    open() { this.status = CellStatus.Opened; }
    close() { this.status = CellStatus.Closed; }
    isAMine(): boolean { return this.content === CellContent.Mine; }
    isEmpty(): boolean { return this.content === CellContent.Empty; }
    isANumber(): boolean { return this.content !== CellContent.Empty && this.content !== CellContent.Mine; }
}

export { CellContent, CellStatus, Cell };
export default Cell;