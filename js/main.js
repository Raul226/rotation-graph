const point1 = new Point(-1 * (window.innerWidth / 2), 0, 5, "#f0f0f0", true);

const drawGraph = () => {
    push();
    stroke("#ff0000");
    line(0, windowHeight / 2, windowWidth, windowHeight / 2);
    line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("#0f0f0f");
    drawGraph();

    point1.setX(-round(rotationY));
    point1.setY(round(rotationX));

    point1.show();
}