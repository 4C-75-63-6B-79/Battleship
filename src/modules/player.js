import GameBoard from "./gameboard";

export default function Player(name) {
    this.name = name;
    this.friendlyWater  = new GameBoard();
    this.enemyWater = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
}

Player.prototype.makeAttack = function makeAttack() {
    function getCoords() {
        return [Math.floor(Math.random() * 10) , Math.floor(Math.random() * 10)];
    }
    let coords = getCoords();
    while(this.enemyWater[coords[0]][coords[1]] !== null) {
        coords = getCoords();
    }
    this.enemyWater[coords[0]][coords[1]] = -1;
    return coords;
}

Player.prototype.markHitInEnemyWater = function markHitInEnemyWater(coord) {
    if(this.enemyWater[coord[0]][coord[1]] === -1) {
        this.enemyWater[coord[0]][coord[1]] = 1;
    }
}

Player.prototype.markMissInEnemyWater = function markMissInEnemyWater(coord) {
    if(this.enemyWater[coord[0]][coord[1]] === -1) {
        this.enemyWater[coord[0]][coord[1]] = 0;
    }
}