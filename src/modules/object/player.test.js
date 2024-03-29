/* global test, expect */

import Player from "./player";
import Ship from "./ship";

test("placeShip function places ship at the given coords", () => {
    const testPlayer = new Player("name");
    const testShip = new Ship("destroyer", 2);
    expect(testPlayer.placeShip("destroyer", [[0,0], [0,1]])).toBe(true);
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

test("markAttack function marks the enemy water gird with 1 if success hit", () => {
    const testPlayer = new Player("name");
    const attackCoord = testPlayer.makeAttack();
    testPlayer.markAttack(true, attackCoord);
    expect(testPlayer.enemyWater.board[attackCoord[0]][attackCoord[1]]).toBe(1);
});

test("markAttack function marks the enemy water gird with 0 if not success hit", () => {
    const testPlayer = new Player("name");
    const attackCoord = testPlayer.makeAttack();
    testPlayer.markAttack(false, attackCoord);
    expect(testPlayer.enemyWater.board[attackCoord[0]][attackCoord[1]]).toBe(0);
});

test("removeEnemyShipLength function removes the length of the ship form the enemyWater which is sunk on enemy board and returns that length", () => {
    const testPlayer = new Player("name");
    const ship = new Ship("carrier", 5);
    expect(testPlayer.removeEnemyShipLength(ship)).toBe(ship.len);
});

test("removeEnemyShipLength function returns false if the parameter passed to it is not a ship", () => {
    const testPlayer = new Player("name");
    expect(testPlayer.removeEnemyShipLength(5)).toBe(false);
});

test("removeEnemyShipLength function returns false if no shipLength provided as parameter present in enemyWater", () => {
    const testPlayer = new Player("name");
    const ship = new Ship("carrier", 5);
    expect(testPlayer.removeEnemyShipLength(ship)).toBe(ship.len);
    expect(testPlayer.removeEnemyShipLength(ship)).toBe(false);
});


test("function allShipSunk returns false when all ships are not sunk", () => {
    const testPlayer = new Player("name");
    expect(testPlayer.allShipSunk()).toBe(false);
});

test("function getShipThatAreHit returns an array of all the ships that are hit and not sunk", () => {
    const testPlayer = new Player("name");
    testPlayer.placeShip("destroyer", [[0,0], [0,1]]);
    testPlayer.receiveAttack([0,1])
    const testShipThatAreHit = testPlayer.getShipsThatAreHit();
    expect(Array.isArray(testShipThatAreHit)).toBe(true);
    expect(testShipThatAreHit.length).toBe(1);
    expect(testShipThatAreHit[0]).toBe("destroyer");
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

