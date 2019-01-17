window.onload = () => {
  const canvas = document.getElementById('board');
  // eslint-disable-next-line no-undef
  const playground = new Board(canvas);

  // (positionX, positionY, radius)
  playground.createSphere(190, 10, 30);
  playground.createSphere(280, 80, 10);

  playground.startEngine();

  document.getElementById('toggle-animation').addEventListener('click', () => {
    if (!playground.running) {
      playground.running = true;
      playground.startEngine();
    } else {
      playground.running = false;
    }
  });

  document.getElementById('toggle-hypotenuse').addEventListener('click', () => {
    playground.showHypotenuse = !playground.showHypotenuse;
    playground.drawCurrentState();
  });

  document.getElementById('toggle-sides').addEventListener('click', () => {
    playground.showTriangleSides = !playground.showTriangleSides;
    playground.drawCurrentState();
  });

  window.addEventListener(
    'resize',
    function() {
      document.getElementById('board').setAttribute('width', window.innerWidth - 100);
    },
    false
  );
};
