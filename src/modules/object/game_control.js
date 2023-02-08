import Player from "./player";

const gameControl = (function gameControl() {

    let player1; 
    let player2;

    function initPlayers() {
        player1 = new Player("user");
        player2 = new Player("computer");
    }

    function placeUserShips(shipName, coords) {
        return player1.placeShip(shipName, coords);
    }

    function playerUserMakesMove(coord) {
        const isPlayerHit = player2.receiveAttack(coord);
        player1.markAttack(isPlayerHit, coord);
        const isNewShipSunk = player2.isNewShipSunk();
        const isWinner = player2.allShipsSunk();
        return {
            name: player1.name,
            coord,              // coordinates of the attack
            isPlayerHit,        // status if it was a successful attack or not
            isNewShipSunk,      // is there any new ship which is sunk
            isWinner,           // has the game been won
        };
    }

    function playerComputerMakesMove() {
        const coord = player2.makeAttack();
        const isPlayerHit = player1.receiveAttack(coord);
        player2.markAttack(isPlayerHit, coord);
        const isNewShipSunk = player1.isNewShipSunk();
        const isWinner = player1.allShipsSunk();
        return {
            name: player2.name,
            coord,              // coordinates of the attack
            isPlayerHit,        // status if it was a successful attack or not
            isNewShipSunk,      // is there any new ship which is sunk
            isWinner,           // has the game been won
        };
    }
    
    function randomShipCoordGenerator(numOfCoordinates) {
        function getRandomCoords() {
            return [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
        }
    
        function coordsValid(coord) {
            return (coord[0] >= 0 && coord[0] <= 9 && coord[1] >= 0 && coord[1] <= 9);
        }
    
        const coords = [getRandomCoords()];
        const direction = Math.floor(Math.random() * 2); // 0 for x and 1 for y
    
        while(coords.length < numOfCoordinates) {
            let first = coords[0];
            let last = coords[coords.length - 1];
    
            if(direction === 0) {
                first = [first[0],first[1]-1];
                last = [last[0],last[1]+1];
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
    
    function placePlayerShips(player) {   
        function placeShip(name, len) {
            let coords = randomShipCoordGenerator(len);
            let isPlacedShip = player.placeShip(name, coords);
            while(!isPlacedShip) {
                coords = randomShipCoordGenerator(len);
                isPlacedShip = player.placeShip(name, coords);
            }
        }
    
        const ships = [ 
            ["carrier", 5],
            ["battleship", 4],
            ["cruiser", 3],
            ["submarine", 3],
            ["destroyer", 2],
         ];
         ships.forEach(ship => placeShip(ship[0], ship[1]));
    }

    function placeComputerShips() {
        placePlayerShips(player2);
    }

    return {
        initPlayers,
        placeUserShips,
        placeComputerShips,
        playerUserMakesMove,
        playerComputerMakesMove,
    }
})();

const {initPlayers, placeUserShips, placeComputerShips, playerUserMakesMove, playerComputerMakesMove} = gameControl;

export {initPlayers, placeUserShips, placeComputerShips, playerUserMakesMove, playerComputerMakesMove} ;

