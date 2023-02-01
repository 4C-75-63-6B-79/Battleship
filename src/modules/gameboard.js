import Ship from "./ship";

export default function GameBoard() {
    this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
    this.ships = {
        "carrier": new Ship("carrier", 5),
        "battleship": new Ship("battleship", 4),
        "cruiser": new Ship("cruiser", 3),
        "submarine": new Ship("submarine", 3),
        "destroyer": new Ship("destroyer", 2)
    }   
}

// this place ship function expects the coords to be equal to the length of the ship to be placed
// coords should be vertical or horizontal
// coords should not have a ship already placed at that coords.
// the ship is yet to be placed.
GameBoard.prototype.placeShip = function placeShip(shipName, coords) {
    if(this.ships[shipName].length !== coords.length) {
        return;
    }
    coords.forEach(ele => {
        if(this.board[ele[0]][ele[1]] === null){
            this.board[ele[0]][ele[1]] = this.ships[shipName];
        }
    });
}

// Assumes that the coords are on board
GameBoard.prototype.receiveAttack = function receiveAttack(coords) {
    const valueAtCoords = this.board[coords[0]][coords[1]];
    if( valueAtCoords === null) {
        this.board[coords[0]][coords[1]] = 0; // 0 is for miss
    } else if(Object.prototype.isPrototypeOf.call(Ship.prototype, valueAtCoords)) {
        valueAtCoords.hit();
        this.board[coords[0]][coords[1]] = 1; // 1 is for hit
    }
}

// assumes all the ships have been placed on the board
GameBoard.prototype.allShipSunk = function allShipSunk() {
    return Object.keys(this.ships).every(key => this.ships[key].isSunk());
}