import GameBoard from "./gameboard";

export default function Player(name) {
    this.name = name;
    this.friendlyWater  = new GameBoard();
    this.attacks = [];
    this.misses = [];
    this.hits = [];
}

Player.prototype.makeAttack = function makeAttack() {
    function getCoords() {
        return [Math.floor(Math.random() * 10) , Math.floor(Math.random() * 10)];
    }
    let coords = getCoords();
    while(this.attacks.indexOf(coords) !== -1) {
        coords = getCoords();
    }
    this.attacks.push(coords);
    return coords;
}