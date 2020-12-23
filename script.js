let modifierX = 0.5;
let modifierY = 0.5;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const addParticle = () => {
    const posX = Math.floor(Math.random() * canvas.width);
    let posY = Math.floor((Math.random() * canvas.height) + (canvas.height / 2));
    const interval = setInterval(() => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${50 * modifierY}, 0, 0, ${posY / canvas.height})`;
      ctx.fillRect(posX - 1, posY, 2, 10);

      if (posY > -10) {
        posY -= 1;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${255 * modifierX}, ${255 * (posY / canvas.height)}, 50, ${posY / canvas.height})`;
        ctx.moveTo(posX, posY);
        ctx.lineTo(posX, posY + 10);
        ctx.closePath();
        ctx.stroke();
      } else {
        clearInterval(interval);
      }
    }, Math.floor(20 + (Math.random() * 30) - (modifierY * 50)));
  };

  setInterval(addParticle, 500);
});

document.addEventListener('mousemove', (e) => {
  modifierX = e.x / window.innerWidth;
  modifierY = e.y / window.innerHeight;
});

document.addEventListener('touchmove', (e) => {
  modifierX = e.touches[0].pageX / window.innerWidth;
  modifierY = e.touches[0].pageY / window.innerHeight;
});

window.addEventListener('resize', () => {
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})
