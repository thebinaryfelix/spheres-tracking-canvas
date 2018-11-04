window.onload = () => {
  const drawHypotenuse = document.getElementById('toggle-hypotenuse');
  const toggleBtn = document.getElementById('toggle-animation');
  const drawSides = document.getElementById('toggle-sides');
  const canvas = document.getElementById('board');
  // eslint-disable-next-line no-undef
  const playground = new Board(canvas);

  // createSphere(positionX, positionY, radius, speed)
  playground.createSphere(190, 10, 10, 30);
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
    } else {
      playground.showHypotenuse = true;
    }
  });

  drawSides.addEventListener('click', () => {
    if (playground.showTriangleSides) {
      playground.showTriangleSides = false;
    } else {
      playground.showTriangleSides = true;
    }
  });
};
