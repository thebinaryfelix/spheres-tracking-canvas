window.onload = () => {
  const drawHypotenuse = document.getElementById('toggle-hypotenuse');
  const drawSides = document.getElementById('toggle-sides');
  const toggleBtn = document.getElementById('toggle-animation');
  const canvas = document.getElementById('board');
  // eslint-disable-next-line no-undef
  const playground = new Board(canvas);

  // createSphere(positionX, positionY, radius)
  playground.createSphere(190, 10, 30);
  playground.createSphere(280, 80, 10);

  playground.startEngine();

  toggleBtn.addEventListener('click', () => {
    if (!playground.running) {
      playground.running = true;
      playground.startEngine();
    } else {
      playground.running = false;
    }
  });

  drawHypotenuse.addEventListener('click', () => {
    if (playground.showHypotenuse) {
      playground.showHypotenuse = false;
      playground.drawCurrentState();
    } else {
      playground.showHypotenuse = true;
      playground.drawCurrentState();
    }
  });

  drawSides.addEventListener('click', () => {
    if (playground.showTriangleSides) {
      playground.showTriangleSides = false;
      playground.drawCurrentState();
    } else {
      playground.showTriangleSides = true;
      playground.drawCurrentState();
    }
  });
};
