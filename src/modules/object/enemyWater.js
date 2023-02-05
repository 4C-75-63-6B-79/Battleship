export default function EnemyWater() {
    this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
}

EnemyWater.prototype.makeAttack = function makeAttack() {
    function getRandomCoords() {
        return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    }

    let coords = getRandomCoords();
    while(this.board[coords[0]][coords[1]] !== null) {
        coords = getRandomCoords();
    }

    this.board[coords[0]][coords[1]] = -1;
    return coords;
}

EnemyWater.prototype.markHit = function markHit(coords) {
    if(this.board[coords[0]][coords[1]] === -1) {
        this.board[coords[0]][coords[1]] = 1;
    }
} 

EnemyWater.prototype.markMiss = function markMiss(coords) {
    if(this.board[coords[0]][coords[1]] === -1) {
        this.board[coords[0]][coords[1]] = 0;
    }
} 
