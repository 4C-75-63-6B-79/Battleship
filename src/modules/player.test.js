/* global test, expect */

import Player from "./player";
import Ship from "./ship";

test("placeShip function places ship at the given coords", () => {
    const testPlayer = new Player("name");
    const testShip = new Ship("destroyer", 2);
    testPlayer.placeShip("destroyer", [[0,0], [0,1]]);
    expect(testPlayer.friendlyWater.board[0][0]).toStrictEqual(testShip);
});

test("make attack returns coordinates to make attack as array of len 2", () => {
    const testPlayer = new Player("name");
    const attackCoord = testPlayer.makeAttack();
    expect(Array.isArray(attackCoord)).toBe(true);
    expect(attackCoord.length).toBe(2);
});

test("receive attack function returns false when there is a unsuccessful hit", () => {
    const testPlayer = new Player("name");
    expect(testPlayer.receiveAttack([0,1])).toBe(false);
});

test("receive attack function returns true when there is a successful hit", () => {
    const testPlayer = new Player("name");
    testPlayer.placeShip("destroyer", [[0,0], [0,1]]);
    expect(testPlayer.receiveAttack([0,1])).toBe(true);
});


test("function allShipSunk returns false when all ships are not sunk", () => {
    const testPlayer = new Player("name");
    expect(testPlayer.allShipSunk()).toBe(false);
});

test("function isNewShipSunk returns false if no new ship sunk", () => {
    const testPlayer = new Player("name");
    expect(testPlayer.isNewShipSunk()).toBe(false);
});

test("function isNewShipSunk returns ship which is sunk if new ship sunk", () => {
    const testPlayer = new Player("name");
    const testShip = new Ship("destroyer", 2);
    testShip.hitCount = 2;
    testPlayer.placeShip("destroyer", [[0,0], [0,1]]);
    testPlayer.receiveAttack([0,0]);
    testPlayer.receiveAttack([0,1]);
    expect(testPlayer.isNewShipSunk()).toStrictEqual(testShip);
});

