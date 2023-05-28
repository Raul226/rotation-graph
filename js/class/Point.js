class Point {
    constructor(x, y, diameter, color, coordinates) {
        this.x = x + window.innerWidth / 2;
        this.y = window.innerHeight / 2 - y;
        this.diameter = diameter;
        this.color = color;
        this.coordinates = coordinates;
    }

    show() {
        push();
        fill(this.color);
        circle(this.x, this.y, this.diameter);
        if (this.coordinates) {
            text(`x: ${this.x - window.innerWidth / 2}\ny: ${window.innerHeight / 2 - this.y}`, this.x + 10, this.y + 10);
        }
        pop();
    }

    setX(newX) {
        if ((newX + window.innerWidth / 2) <= window.innerWidth &&
            (newX + window.innerWidth / 2) >= 0) {
            this.x = newX + window.innerWidth / 2;
        }
    }

    setY(newY) {
        if ((newY + window.innerHeight / 2) <= window.innerHeight &&
            (newY + window.innerHeight / 2) >= 0) {
            this.y = window.innerHeight / 2 - newY;
        }
    }

    setDiameter(newDiameter) {
        this.diameter = newDiameter;
    }

    toggleCoordinates() {
        if (this.coordinates) {
            this.coordinates = false;
        } else {
            this.coordinates = true;
        }
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getX() {
        return this.x - window.innerWidth / 2;
    }

    getY() {
        return this.y - window.innerHeight / 2;
    }

    getDiameter() {
        return this.diameter;
    }

    coordinatesShow() {
        return this.coordinates;
    }

    getColor() {
        return this.color;
    }
}