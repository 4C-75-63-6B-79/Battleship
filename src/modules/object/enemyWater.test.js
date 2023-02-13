/* global test, expect */

import EnemyWater from "./enemyWater";

test("function make attack returns coodinates which array of len 2 and marks as them as -1", () => {
    const testEnemyWater = new EnemyWater();
    const coords = testEnemyWater.makeAttack();
    expect(Array.isArray(coords)).toBe(true);
    expect(coords.length).toBe(2);
    expect(testEnemyWater.board[coords[0]][coords[1]]).toBe(-1);
});

test("function markhit marks the coordinates sent as 1 if the coordinates were the coordinates of attack", () => {
    const testEnemyWater = new EnemyWater();
    const coords = testEnemyWater.makeAttack();
    testEnemyWater.markHit(coords);
    expect(testEnemyWater.board[coords[0]][coords[1]]).toBe(1);
});

test("function markmiss marks the coordinates sent as 0 if the coordinates were the coordinates of attack", () => {
    const testEnemyWater = new EnemyWater();
    const coords = testEnemyWater.makeAttack();
    testEnemyWater.markMiss(coords);
    expect(testEnemyWater.board[coords[0]][coords[1]]).toBe(0);
});

test("function removeShipLength removes the value with the length of the ship which is sunk from the shiplength array and returns that value", () => {
    const testEnemyWater = new EnemyWater();
    expect(testEnemyWater.removeShipLenght(3)).toBe(3);
});

test("function removeShipLength returns false if the length of the ship to be removed is not in the shiplength array", () => {
    const testEnemyWater = new EnemyWater();
    expect(testEnemyWater.removeShipLenght(6)).toBe(false);
});