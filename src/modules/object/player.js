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
    return this.friendlyWater.placeShip(this.ships[name], coord);
}

Player.prototype.makeAttack = function makeAttack() {
    return this.enemyWater.makeAttack();
}

Player.prototype.receiveAttack = function receiveAttack(coord) {
    return this.friendlyWater.receiveAttack(coord);
}

Player.prototype.markAttack = function markAttack(otherPlayerShipHit, coord) {
    this.enemyWater.updateAttackDetails(otherPlayerShipHit);
    if(otherPlayerShipHit) {
        this.enemyWater.markHit(coord);
    } else {
        this.enemyWater.markMiss(coord);
    }
}

Player.prototype.getShipsThatAreHit = function getShipsThatAreHit() {
    const shipThatAreHit = Object.keys(this.ships).filter( key => this.ships[key].hitCount > 0);
    return shipThatAreHit;
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

Player.prototype.placeShipAutomatically = function placeShipAutomatically() {

    function coordsValid(coord) {
        return (coord[0] >= 0 && coord[0] <= 9 && coord[1] >= 0 && coord[1] <= 9);
    }

    function randomShipCoordGenerator(numOfCoordinates) {
        function getRandomCoords() {
            return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
        }
    
        const coords = [getRandomCoords()];
        const direction = Math.floor(Math.random() * 2); // 0 for x and 1 for y
    
        while(coords.length < numOfCoordinates) {
            let first = coords[0];                  // gets the row value
            let last = coords[coords.length - 1];   // gets the columns value
    
            if(direction === 0) {
                first = [first[0],first[1]-1];      // adds coordinates in negative direction depending on axis
                last = [last[0],last[1]+1];         // adds coordinates in positive direction depending on axis
            } else if(direction === 1) {
                first = [first[0]-1,first[1]];
                last = [last[0]+1,last[1]];
            }
    
            if(coordsValid(first)) {
                coords.unshift(first);
            }
            if(coords.length === numOfCoordinates) break;
            if(coordsValid(last)) {
                coords.push(last);
            }
        }
        return coords;
    }

    function isShipAdjacentToCoords(coords) {
        const isShipPlaceOnAdjacent = coords.every(coord => {  // stores false is there is a ship placed on the adjacent coords
            const left = coordsValid([ coord[0], coord[1]-1 ]) ? [ coord[0], coord[1]-1 ] : null;
            const right = coordsValid([ coord[0], coord[1]+1 ]) ? [ coord[0], coord[1]+1 ] : null;
            const top = coordsValid([ coord[0]-1 , coord[1] ]) ? [ coord[0]-1, coord[1] ] : null;
            const bottom = coordsValid([ coord[0]+1 , coord[1] ]) ? [ coord[0]+1, coord[1] ] : null;

            if(left !== null && this.friendlyWater.board[left[0]][left[1]] !== null) return false;
            if(right !== null && this.friendlyWater.board[right[0]][right[1]] !== null) return false;
            if(top !== null && this.friendlyWater.board[top[0]][top[1]] !== null) return false;
            if(bottom !== null && this.friendlyWater.board[bottom[0]][bottom[1]] !== null) return false;

            return true
        });
        return !isShipPlaceOnAdjacent; // returns true if there is a ship adjacent to coords
    }
 
    function placeShip(name, len) {
        let coords = randomShipCoordGenerator(len);
        let isShipAdjacent = isShipAdjacentToCoords.call(this, coords);
        let isPlacedShip = false;

        if(!isShipAdjacent) {
            isPlacedShip = this.placeShip(name, coords);
        }

        while(isShipAdjacent && !isPlacedShip) {
            coords = randomShipCoordGenerator(len);
            isShipAdjacent = isShipAdjacentToCoords.call(this, coords);
            if(!isShipAdjacent) {
                isPlacedShip = this.placeShip(name, coords);
            }
        }
    }

    const ships = [ 
        ["carrier", 5],
        ["battleship", 4],
        ["cruiser", 3],
        ["submarine", 3],
        ["destroyer", 2],
    ];
    ships.forEach(ship => placeShip.call(this, ship[0], ship[1]));
    
}