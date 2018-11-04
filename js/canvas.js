// eslint-disable-next-line no-unused-vars
class Board {
  constructor(canvas) {
    this.board = canvas;
    this.ctx = this.board.getContext('2d');
    this.board.width = 500;
    this.board.height = 500;
    this.spheres = [];
    this.running = true;
  }

  clearBoard() {
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
  }

  createSphere(posX, posY, radius, speed) {
    if (this.spheres.length < 2) { // max of 2 spheres in the board
      // eslint-disable-next-line no-undef
      this.spheres.push(new Sphere(this.board, posX, posY, radius, speed));
    }
  }

  triangleSides() {
    // draw hypotenuse
    this.ctx.beginPath();
    this.ctx.moveTo(this.spheres[0].x, this.spheres[0].y);
    this.ctx.lineTo(this.spheres[1].x, this.spheres[1].y);
    this.ctx.stroke();

    // draw triangle's adjacent and opposite sides
    for (let i = 0; i < 2; i += 1) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.spheres[i].x, this.spheres[i].y);
      this.ctx.lineTo(this.spheres[0].x, this.spheres[1].y);
      this.ctx.stroke();
    }
  }

  draw() {
    // draw Spheres
    if (this.spheres.length !== 0) {
      this.spheres.forEach(sphere => sphere.draw());
    }
  }

  move() {
    // move Spheres
    if (this.spheres.length !== 0) {
      this.spheres.forEach(sphere => sphere.move());
    }
  }

  // This is the main collision function
  // Checking the distance between sphere centers is a way to verify collisions
  distanceBtwCenters() {
    // Length of the first side is given by |X1 - X2|
    const L1 = Math.abs(this.spheres[0].x - this.spheres[1].x);

    // Length of the second side is given by |Y1 - Y2|
    const L2 = Math.abs(this.spheres[0].y - this.spheres[1].y);

    // By the Pythagorean theorem, the hypothenuse^2 = L1ˆ2 + L2^2
    const HIP = Math.sqrt((L1 ** 2) + (L2 ** 2));

    return HIP;
  }

  checkSphereCollision() {
    if (this.distanceBtwCenters() <= this.spheres[0].radius + this.spheres[1].radius) {
      // We have a collision!
    }
  }

  updateBoard() {
    this.draw();
    this.move();
  }

  startEngine() {
    this.interval = setInterval(() => {
      if (!this.running) {
        clearInterval(this.interval);
      }
      this.clearBoard();
      this.triangleSides();
      this.checkSphereCollision();
      this.updateBoard();
    }, 1000 / 60);
  }
}
