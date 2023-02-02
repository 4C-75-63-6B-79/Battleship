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