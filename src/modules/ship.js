export default function Ship(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
}

Ship.prototype.hit = function hit() {
    this.hitCount += 1;
}