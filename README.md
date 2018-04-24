# Minesweeper

This is a third attempt of mine at making a Minesweeper game. This time I want to try to create this classic by using test-driven development and to see if it will lead me to a better design.
Initial configuration of Typescript, React and Jest was achieved with the help of the following tutorial: https://github.com/Microsoft/TypeScript-React-Starter. Commands for starting the application, building and running the tests can also be found there.

## Notable changes induced by TDD or the need to test more easily
* Table class - test that the correct adjacent indexes are found when opening a cell without going through the whole board setup. It also occurred to me that the index functionality is not specific to Minesweeper at all but could probably be used in other table-based (e.g. chess, checkers, tic tac toe) games aswell. Table is definitely an internal structure that did not occur to me while building my previous versions of the game.
* Game constructor board parameter - allows easy testing with a static board.
* MineCounter class - including this code directly into BoardGenerator results in complicated and messy tests for randomly generated board's mine counts. MineCounter class, on the other hand, allows for nice, easy and clear testing of the mine counts with a predefined static board.

## Other discoveries
* Constructor testing - constructor code should be tested only when it changes initial data. Each change having its own test documents the behaviour.
