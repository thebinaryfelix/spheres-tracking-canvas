// eslint-disable-next-line no-unused-vars
class Board {
  constructor(canvas) {
    this.board = canvas;
    this.ctx = this.board.getContext('2d');
    this.board.width = 800;
    this.board.height = 500;
    this.spheres = [];
    this.running = true;
    this.showTriangleSides = false;
    this.showHypotenuse = false;
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

  draw() {
    this.triangleSides();
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
    return [HIP, L1, L2];
  }

  triangleSides() {
    const sides = this.distanceBtwCenters();
    let styleHIP = 'black';
    let styleL = 'black';

    if (sides[0] > sides[1] || sides[0] > sides[2]) {
      styleHIP = 'red';
      styleL = 'blue';
    }
    if (this.showHypotenuse) {
      // draw hypotenuse
      this.ctx.beginPath();
      this.ctx.strokeStyle = styleHIP;
      this.ctx.moveTo(this.spheres[0].x, this.spheres[0].y);
      this.ctx.lineTo(this.spheres[1].x, this.spheres[1].y);
      this.ctx.stroke();
    }
    if (this.showTriangleSides) {
      // draw triangle's adjacent and opposite sides
      for (let i = 0; i < 2; i += 1) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = styleL;
        this.ctx.moveTo(this.spheres[i].x, this.spheres[i].y);
        this.ctx.lineTo(this.spheres[0].x, this.spheres[1].y);
        this.ctx.stroke();
      }
    }
  }

  checkSphereCollision() {
    if (this.distanceBtwCenters()[0] <= this.spheres[0].radius + this.spheres[1].radius) {
      // We have a collision!
      console.log('Collision!');
    }
  }

  drawCurrentState() {
    this.clearBoard();
    this.draw();
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
      this.updateBoard();
      this.checkSphereCollision();
    }, 1000 / 60);
  }
}
