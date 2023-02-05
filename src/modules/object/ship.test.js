/* global test, expect */

import Ship from "./ship";

test("ship hit function increase ship hitCount by 1", () => {
    const testShip = new Ship("destroyer", 2);
    testShip.hit();
    expect(testShip.hitCount).toBe(1);
});

test("ship hit function does not increase ship hitCount by 1 if ship is sunk", () => {
    const testShip = new Ship("destroyer", 2);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.hitCount).toBe(2);
});

test("ship isSunk function returns false if ship is not sunk", () => {
    const testShip = new Ship("destroyer", 2);
    expect(testShip.isSunk()).toBe(false);
});

test("ship isSunk function returns true if ship is sunk", () => {
    const testShip = new Ship("destroyer", 2);
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});