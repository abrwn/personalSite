let modifier1 = 0;
let modifier2 = 0;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const addParticle = () => {
    const posX = Math.floor(Math.random() * canvas.width);
    let posY = canvas.height;

    const interval = setInterval(() => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${30 * modifier2}, 0, 0, ${posY / canvas.height})`;
      ctx.fillRect(posX - 1, posY, 2, 10);

      if (posY > -10) {
        posY -= 1;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${255 * modifier1}, ${255 * (posY / canvas.height)}, 50, ${posY / canvas.height})`;
        ctx.moveTo(posX, posY);
        ctx.lineTo(posX, posY + 10);
        ctx.closePath();
        ctx.stroke();
      } else {
        clearInterval(interval);
      }
    }, Math.random() * 20);
  };
  
  setInterval(addParticle, (1000 * modifier1) + 200);
});

document.addEventListener('mousemove', (e) => {
  modifier1 = e.x / window.innerWidth;
  modifier2 = e.y / window.innerHeight;
});

window.addEventListener('resize', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})
