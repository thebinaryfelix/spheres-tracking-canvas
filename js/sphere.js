// eslint-disable-next-line no-unused-vars
class Sphere {
  constructor(board, x = 10, y = 10, r = 10, speed = 20) {
    this.board = board;
    this.ctx = board.getContext('2d');

    this.radius = r;
    this.x = x;
    this.y = y;

    this.speedX = speed;
    this.speedY = speed;

    this.directionX = 1;
    this.directionY = 1;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    this.ctx.fill();
  }

  move() {
    this.y += this.directionY * (this.speedY / (1000 / 60));
    this.x += this.directionX * (this.speedX / (1000 / 60));

    if (this.y - this.radius <= 0) {
      this.directionY *= -1;
    } else if (this.y + this.radius >= this.board.height) {
      this.directionY *= -1;
    }
    if (this.x - this.radius <= 0) {
      this.directionX *= -1;
    } else if (this.x + this.radius >= this.board.width) {
      this.directionX *= -1;
    }
  }
}
