/* global test, expect */

import FriendlyWater from "./friendlyWater";
import Ship from "./ship";

test("function place ship places ship at given coordinates and returns true if ship placed else false", () => {
    const testFriendlyWater = new FriendlyWater();
    const testShip = new Ship("destroyer", 2);
    expect(testFriendlyWater.placeShip(testShip, [[0,0], [0,1]])).toBe(true);
    expect(testFriendlyWater.board[0][0] === testShip).toBe(true);
    expect(testFriendlyWater.board[0][1] === testShip).toBe(true);
});

test("function receiveAttack return false if no ship at the coords", () => {
    const testFriendlyWater = new FriendlyWater();
    expect(testFriendlyWater.receiveAttack([0,0])).toBe(false);
});

test("function receiveAttack return true if ship at the coords", () => {
    const testFriendlyWater = new FriendlyWater();
    const testShip = new Ship("destroyer", 2);
    testFriendlyWater.placeShip(testShip, [[0,0], [0,1]]);
    expect(testFriendlyWater.receiveAttack([0,0])).toBe(true);
});

