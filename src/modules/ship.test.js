/* global expect, test */

import Ship from "./ship";

test("Ship creates a object of type ship", () => {
    const testShip = new Ship("test", 2);
    expect(Object.prototype.isPrototypeOf.call(Ship.prototype, testShip)).toBe(true);
});

test("Ship is hit increse the hit count", () => {
    const testShip = new Ship("test", 2);
    testShip.hit();
    testShip.hit();
    expect(testShip.hitCount).toBe(2);
});

test("Ship hit more than length ship sunk", () => {
    const testShip = new Ship("test", 2);
    testShip.hit();
    testShip.hit();
    expect(testShip.sunk()).toBe(true);
})
