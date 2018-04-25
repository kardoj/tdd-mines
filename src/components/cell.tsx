import * as React from 'react';

enum CellContent {
    Empty,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Mine
}

enum CellStatus {
    Opened,
    Closed
}

class Cell extends React.Component {
    content: CellContent;
    status: CellStatus;
    isFlagged: boolean;

    constructor(props: any) {
        super(props);
        this.content = props.content;
        this.status = CellStatus.Closed;
        this.isFlagged = false;
    }

    open() { this.status = CellStatus.Opened; }
    close() { this.status = CellStatus.Closed; }
    isClosed(): boolean { return this.status === CellStatus.Closed; }
    isAMine(): boolean { return this.content === CellContent.Mine; }
    isEmpty(): boolean { return this.content === CellContent.Empty; }
    isANumber(): boolean { return this.content !== CellContent.Empty && this.content !== CellContent.Mine; }

    render(key?: number): JSX.Element {
        return (<td key={key}>{this.content}</td>);
    }
}

export { CellContent, Cell };
export default Cell;