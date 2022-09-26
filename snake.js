class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{ x: this.x, y: this.y }]
        this.rotatX = 0;
        this.rotatY = 1;


    }

    move() {
        var newRate;
        if (this.rotatX == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1]
            }
        }
    }
}