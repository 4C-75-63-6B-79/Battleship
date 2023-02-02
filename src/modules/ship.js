export default function Ship(name, len) {
    this.name = name;
    this.len = len;
    this.hitCount = 0;
}

Ship.prototype.hit = function hit() {
    if(!this.isSunk()) {
        this.hitCount += 1;
    }
}

Ship.prototype.isSunk = function isSunk() {
    return this.len === this.hitCount;
}