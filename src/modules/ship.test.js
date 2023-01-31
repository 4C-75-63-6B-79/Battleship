/* global expect, test */

import Ship from "./ship";

test("Ship creates a object of type ship", () => {
    const testShip = new Ship("test", 2);
    expect(Object.prototype.isPrototypeOf.call(Ship.prototype, testShip)).toBe(true);
})
