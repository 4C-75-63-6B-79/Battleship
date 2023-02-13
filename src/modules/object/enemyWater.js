export default function EnemyWater() {
    this.board = Array.from({length: 10}, () => Array.from({length: 10}, () => null));
    this.attackDetails = {
        lastCoord: null,
        lastDirection: null,
        xCoord: [],
        yCoord: [],
    }
    this.shipLength = [2,3,3,4,5];
    this.percentFill = 45;
}

EnemyWater.prototype.makeAttack = function makeAttack() {
    function getRandomCoords() {
        return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
    }

    const isPercentFilled = (function initPercentFilled() {
        let isFilled = false;

        return function countFilled() {
            if(isFilled) return isFilled;

            let count = 0;
            this.board.forEach( row => {
                row.forEach( element => {
                    if(element !== null) count += 1;
                });
            });
            if(count > this.percentFill) isFilled = true;
            return isFilled;
        }
    })();

    function getTheEmptyBoxWithLength(longestShipLeftOnEnemyWater) {
        let emptyBoxCount = 0;
        for(let i=0; i<this.board.length; i += 1) {
            emptyBoxCount = 0;
            for(let j=0; j<this.board[i].length; j += 1) {
                if(this.board[i][j] === null) {
                    emptyBoxCount += 1;
                } else {
                    emptyBoxCount = 0;
                }
                if(longestShipLeftOnEnemyWater === emptyBoxCount) {
                    return [i, j];
                }
            }
        }
        let coords;
        for(let i=0; i<this.board.length; i += 1) {
            emptyBoxCount = 0;
            for(let j=0; j<this.board[i].length; j += 1) {
                if(this.board[j][i] === null) {
                    emptyBoxCount += 1;
                } else {
                    emptyBoxCount = 0;
                }
                if(longestShipLeftOnEnemyWater === emptyBoxCount) {
                    coords = [j, i];
                }
            }
        }
        return coords;
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
    } else if(isPercentFilled.call(this)){
        const longestShipLeftOnEnemyWater = this.shipLength[this.shipLength.length-1];
        coords = getTheEmptyBoxWithLength.call(this, longestShipLeftOnEnemyWater);
        lastCoord = coords;
        lastDirection = null;
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

EnemyWater.prototype.removeShipLenght = function removeShipLenght(shipLengthToRemove) {
    const index = this.shipLength.indexOf(shipLengthToRemove);
    if(index !== -1) {
        return this.shipLength.splice(index, 1)[0];
    }
    return false;
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
