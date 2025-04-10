// 樱花飘落特效
const Sakura = function() {
  this.x = 0;
  this.y = 0;
  this.size = Math.random() * 8 + 5;
  this.speed = Math.random() * 1 + 0.5;
  this.angle = Math.random() * 360;
  this.rotation = Math.random() * 2 + 1;
};

function createSakura() {
  const canvas = document.createElement('canvas');
  canvas.id = 'sakura';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const sakuras = [];
  let lastTime = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function update(time) {
    const deltaTime = time - lastTime;
    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 添加新樱花
    if (Math.random() < 0.05) {
      const sakura = new Sakura();
      sakura.x = Math.random() * canvas.width;
      sakura.y = -10;
      sakuras.push(sakura);
    }
    
    // 更新樱花位置
    for (let i = sakuras.length - 1; i >= 0; i--) {
      const s = sakuras[i];
      s.y += s.speed * deltaTime * 0.05;
      s.x += Math.sin(s.angle * Math.PI / 180) * 0.8;
      s.angle += s.rotation;
      
      // 绘制樱花
      ctx.save();
      ctx.beginPath();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle * Math.PI / 180);
      
      ctx.fillStyle = 'rgba(255, 183, 197, 0.7)';
      for (let j = 0; j < 5; j++) {
        ctx.ellipse(0, 0, s.size * 0.5, s.size, (j * 72) * Math.PI / 180, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
      
      // 移除超出屏幕的樱花
      if (s.y > canvas.height + 10) {
        sakuras.splice(i, 1);
      }
    }
    
    requestAnimationFrame(update);
  }
  
  requestAnimationFrame(update);
}

document.addEventListener('DOMContentLoaded', createSakura); 