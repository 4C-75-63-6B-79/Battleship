import Ship from "./ship";

export default function FriendlyWater() {
    this.board = Array.from({length: 10}, () => Array.from({length: 8}, () => null));
}

FriendlyWater.prototype.placeShip = function placeShip(ship, coords) {
    if(!coords.every(ele => this.board[ele[0]][ele[1]] === null)) {
        return;
    }
    coords.forEach(ele => {
        this.board[ele[0]][ele[1]] = ship;
    });
}

FriendlyWater.prototype.receiveAttack = function receiveAttack(coord) {
    if(this.board[coord[0]][coord[1]] === null) {
        this.board[coord[0]][coord[1]] = 0; 
        return false; // misses
    } 
    
    if(Object.prototype.isPrototypeOf.call(Ship.prototype, this.board[coord[0]][coord[1]])) {
        this.board[coord[0]][coord[1]].hit(); // hit the ship
        this.board[coord[0]][coord[1]] = 1; 
        return true; // hit
    }

    return null; // does not do anything to the coords already attacked
}

