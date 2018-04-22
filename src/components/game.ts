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

class Game {
    board: Array<CellContent> | null = null;

    start(board: Array<CellContent>) {
        this.board = board;
    }
}

export { CellContent, Game };
export default Game;