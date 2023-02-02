/* global test, expect */

import GameBoard from "./gameboard";
import Ship from "./ship";

test("places the given ship at the sent coordinates", () => {
    const testGameBoard = new GameBoard();
    const coords = [[0,0], [0,1], [0,2], [0,3], [0,4]];
    const testCarrierShip = new Ship("carrier", 5)
    testGameBoard.placeShip("carrier", coords);
    expect(coords.every(ele => testGameBoard.board[ele[0]][ele[1]].name === testCarrierShip.name)).toBe(true);
});

test("places the given ship at the sent coordinates", () => {
    const testGameBoard = new GameBoard();
    const coords = [[0,0], [0,1]];
    const testCarrierShip = new Ship("destroyer", 2);
    testGameBoard.placeShip("destroyer", coords);
    expect(coords.every(ele => testGameBoard.board[ele[0]][ele[1]].name === testCarrierShip.name)).toBe(true);
});

test("takes attack at given coordinates marks them 0 if miss", () => {
    const testGameBoard = new GameBoard();
    const attackCoords = [2,5];
    expect(testGameBoard.receiveAttack(attackCoords)).toBe(false);
    expect(testGameBoard.board[attackCoords[0]][attackCoords[1]] === 0).toBe(true);
});

test("takes attack at given coordinates marks them 1 if hit ship", () => {
    const testGameBoard = new GameBoard();
    const attackCoords = [0,1];
    testGameBoard.placeShip("destroyer", [[0,0], [0,1]]);
    expect(testGameBoard.receiveAttack(attackCoords)).toBe(true);
    expect(testGameBoard.board[attackCoords[0]][attackCoords[1]] === 1).toBe(true);
});

test("takes attack at given coordinates does nothing if that coords is already attacked", () => {
    const testGameBoard = new GameBoard();
    const attackCoords = [2,5];
    testGameBoard.receiveAttack(attackCoords);
    const valueBeforeSecondAttack = testGameBoard.board[attackCoords[0]][attackCoords[1]];
    testGameBoard.receiveAttack(attackCoords);
    expect(testGameBoard.board[attackCoords[0]][attackCoords[1]] === valueBeforeSecondAttack).toBe(true);
});

test("Gameboard return false if all ship not sunk", () => {
    const testGameBoard = new GameBoard();
    expect(testGameBoard.allShipSunk()).toBe(false);
})