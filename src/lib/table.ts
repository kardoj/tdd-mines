/** A table represented in a one-dimensional array */
class Table {
    private cols: number;
    private cellCount: number;

    constructor(cols: number, cellCount: number) {
        this.cols = cols;
        this.cellCount = cellCount;
    }

    getAdjacentIndexes(index: number): Array<number> {
        const top = index - this.cols;
        const topLeft = top - 1;
        const topRight = top + 1;
        const left = index - 1;
        const right = index + 1;
        const bottom = index + this.cols;
        const bottomLeft = bottom - 1;
        const bottomRight = bottom + 1;

        const leftColumn = index % this.cols === 0;
        const rightColumn = index % this.cols === this.cols - 1;
        const topRow = index < this.cols;
        const bottomRow = index >= this.cellCount - this.cols;
        const topLeftCorner = index === 0;
        const topRightCorner = index === this.cols - 1;
        const bottomLeftCorner = index === this.cellCount - this.cols;
        const bottomRightCorner = index === this.cellCount - 1;

        if (topLeftCorner) return [right, bottom, bottomRight];
        if (topRightCorner) return [left, bottomLeft, bottom];
        if (bottomLeftCorner) return [top, topRight, right];
        if (bottomRightCorner) return [topLeft, top, left];
        if (topRow) return [left, right, bottomLeft, bottom, bottomRight];
        if (bottomRow) return [topLeft, top, topRight, left, right];
        if (leftColumn) return [top, topRight, right, bottom, bottomRight];
        if (rightColumn) return [topLeft, top, left, bottomLeft, bottom];
        return [topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight];
    }
}

export default Table;