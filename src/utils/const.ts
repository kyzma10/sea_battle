const SIZE: number = 10;

enum CellStatus {
    free = 0,
    hired = 1,
    killed = 2,
    miss = 3
}

enum TypeShip {
    oneDeck = 1,
    twoDeck = 2,
    threeDeck = 3,
    fourDeck = 4
}

export {
    SIZE,
    CellStatus,
    TypeShip
}