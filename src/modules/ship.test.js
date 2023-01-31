/* global expect, test */

import ship from "./ship";

test("sunk", () => {
    expect(ship(6)).toBe("sunk");
})