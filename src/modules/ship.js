export default function Ship(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
}

Ship.prototype.hit = function hit() {
    this.hitCount += 1;
}

Ship.prototype.isSunk = function isSunk() {
    return (this.hitCount === this.length);
}