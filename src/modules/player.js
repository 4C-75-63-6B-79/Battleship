import EnemyWater from "./enemyWater";
import FriendlyWater from "./friendlyWater";
import Ship from "./ship";

export default function Player(name) {
    this.name = name;
    this.friendlyWater = new FriendlyWater();
    this.enemyWater = new EnemyWater();
    this.ships = {
        "carrier": new Ship("carrier", 5),
        "battleship": new Ship("battleship", 4),
        "cruiser": new Ship("cruiser", 3),
        "submarine": new Ship("submarine", 3),
        "destroyer": new Ship("destroyer", 2),
    }
}

Player.prototype.placeShip = function placeShip(name, coord) {
    this.friendlyWater.placeShip(this.ships[name], coord);
}

Player.prototype.makeAttack = function makeAttack() {
    return this.enemyWater.makeAttack();
}

Player.prototype.receiveAttack = function receiveAttack(coord) {
    return this.friendlyWater.receiveAttack(coord);
}

Player.prototype.isNewShipSunk = function isNewShipSunk() {
    const sunkShip = Object.keys(this.ships).find(key => this.ships[key].isSunk());
    if(sunkShip) {
        const ship = this.ships[sunkShip];
        delete this.ships[sunkShip];
        return ship;
    }
    return false;
}

Player.prototype.allShipSunk = function allShipSunk() {
    return Object.keys(this.ships).length === 0;
}