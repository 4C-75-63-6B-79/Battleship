export default function EnemyWater() {
    this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
    this.attackDetails = {
        lastCoord: null,
        lastDirection: null,
        xCoord: [],
        yCoord: [],
    }
}

EnemyWater.prototype.makeAttack = function makeAttack() {
    function getRandomCoords() {
        return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    }

    let {lastCoord, lastDirection} = this.attackDetails;
    const {xCoord, yCoord} = this.attackDetails;
    let coords;

    if(xCoord.length > 0 || yCoord.length > 0) {
        if(lastDirection === "x" && xCoord.length > 0) {
            coords = xCoord.pop();
            lastCoord = coords;
        } else if(lastDirection === "y" && yCoord.length > 0) {
            coords =yCoord.pop();
            lastCoord = coords;
        } else {
            coords = xCoord.pop() || yCoord.pop();
            lastCoord = coords;
            lastDirection = lastDirection === "x" ? "y" : "x";
        }
    } else {
        coords = getRandomCoords();
        while(this.board[coords[0]][coords[1]] !== null) {
            coords = getRandomCoords();
        }
        lastCoord = coords;
        lastDirection = null;
    }

    this.attackDetails.lastCoord = lastCoord;
    this.attackDetails.lastDirection = lastDirection;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
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

EnemyWater.prototype.updateAttackDetails  = function updateAttackDetails(lastAttackSuccessStatus) {

    let {lastDirection} = this.attackDetails;
    const {lastCoord, xCoord, yCoord} = this.attackDetails;

    if(!lastCoord) return;
    
    function isValidAttackCoordinates(coords) {
        return coords[0] >=0 && coords[0] < 10 && coords[1] >=0 && coords[1] < 10 && this.board[coords[0]][coords[1]] === null; 
    }

    function adjacentCoordinates(axis) {
        const coords = [ 
            [ lastCoord[0] - 1 , lastCoord[1] ],  // left
            [ lastCoord[0] + 1, lastCoord[1] ],  // right
            [ lastCoord[0] , lastCoord[1] - 1 ],  // top
            [ lastCoord[0] , lastCoord[1] + 1]   // bottom
        ];

        if(axis === "x") {
            if( isValidAttackCoordinates.call(this, coords[0]) ) xCoord.push(coords[0]);
            if( isValidAttackCoordinates.call(this, coords[1]) ) xCoord.push(coords[1]);
        } else if(axis === "y") {
            if( isValidAttackCoordinates.call(this, coords[2]) ) yCoord.push(coords[2]);
            if( isValidAttackCoordinates.call(this, coords[3]) ) yCoord.push(coords[3]);
        } else {
            if( isValidAttackCoordinates.call(this, coords[0]) ) xCoord.push(coords[0]);
            if( isValidAttackCoordinates.call(this, coords[1]) ) xCoord.push(coords[1]);
            if( isValidAttackCoordinates.call(this, coords[2]) ) yCoord.push(coords[2]);
            if( isValidAttackCoordinates.call(this, coords[3]) ) yCoord.push(coords[3]);
        }
    }


    if(lastAttackSuccessStatus) {
        adjacentCoordinates.call(this, lastDirection);
        lastDirection = lastDirection === null ? "x" : lastDirection;
    } else {
        lastDirection = lastDirection === "x" ? "y" : "x";
    }

    this.attackDetails.lastCoord = lastCoord;
    this.attackDetails.lastDirection = lastDirection;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
}
