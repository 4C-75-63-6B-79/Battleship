/* global test, expect */

import Player from "./player";

test("Returns a array", () =>{
    const testPlayer = new Player();
    expect(Array.isArray(testPlayer.makeAttack())).toBe(true);
});

test("Size of array is 2", () =>{
    const testPlayer = new Player();
    expect(testPlayer.makeAttack().length).toBe(2);
});

test("coordinate is on board", () =>{
    const testPlayer = new Player();
    const coord  = testPlayer.makeAttack();
    expect(coord[0] < 10 && coord[1] < 10).toBe(true);
});

test("Player sets value 1 to last attack coord if it was hit in enemy water", () =>{
    const testPlayer = new Player();
    const coord = testPlayer.makeAttack();
    testPlayer.markHitInEnemyWater(coord);
    expect(testPlayer.enemyWater[coord[0]][coord[1]]).toBe(1);
});

test("Player sets value 0 to last attack coord if it was miss in enemy water", () =>{
    const testPlayer = new Player();
    const coord = testPlayer.makeAttack();
    testPlayer.markMissInEnemyWater(coord);
    expect(testPlayer.enemyWater[coord[0]][coord[1]]).toBe(0);
});