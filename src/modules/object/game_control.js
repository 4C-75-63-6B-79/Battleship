import Player from "./player";

const gameControl = (function gameControl() {

    let player1; 
    let player2;

    function initPlayers(userPlayerName = "Chief") {
        player1 = new Player(`${userPlayerName}`);
        player2 = new Player("computer");
    }

    function placeUserShips(shipName, coords) {
        return player1.placeShip(shipName, coords);
    }

    function playerUserMakesMove(coord) {
        const isPlayerHit = player2.receiveAttack(coord);
        player1.markAttack(isPlayerHit, coord);
        const shipsThatAreHit = player2.getShipsThatAreHit();
        const isNewShipSunk = player2.isNewShipSunk();
        const isWinner = player2.allShipSunk();
        return {
            name: player1.name,
            coord,              // coordinates of the attack
            isPlayerHit,        // status if it was a successful attack or not
            shipsThatAreHit,    // ships that are hit
            isNewShipSunk,      // is there any new ship which is sunk
            isWinner,           // has the game been won
        };
    }

    function playerComputerMakesMove() {
        const coord = player2.makeAttack();
        const isPlayerHit = player1.receiveAttack(coord);
        player2.markAttack(isPlayerHit, coord);
        const shipsThatAreHit = player1.getShipsThatAreHit();
        const isNewShipSunk = player1.isNewShipSunk();
        const isWinner = player1.allShipSunk();
        return {
            name: player2.name,
            coord,              // coordinates of the attack
            isPlayerHit,        // status if it was a successful attack or not
            shipsThatAreHit,    // ships that are hit
            isNewShipSunk,      // is there any new ship which is sunk
            isWinner,           // has the game been won
        };
    }
    
    function placeComputerShips() {
        player2.placeShipAutomatically();
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

