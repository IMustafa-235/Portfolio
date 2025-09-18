let text = "Mustafa";
let i = 0;
let speed = 300;

  function typeEffect() {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect();

  // Put this at the end of script.js (or replace if you already have similar code)
  // (() => {
  //     const canvas = document.getElementById('bgParticles');
  //     if (!canvas) return;
  //     const ctx = canvas.getContext('2d', { alpha: true });
    
  //     let w = 0, h = 0, particles = [];
    
  //     function resize() {
  //       w = canvas.width = innerWidth;
  //       h = canvas.height = innerHeight;
  //       // particle count scales with area; tweak divisor to change density
  //       const targetCount = Math.max(30, Math.min(120, Math.floor((w * h) / 15000)));
  //       // create or remove to match targetCount
  //       while (particles.length < targetCount) particles.push(createParticle());
  //       while (particles.length > targetCount) particles.pop();
  //     }
    
  //     function createParticle() {
  //         const radius = Math.random() * 3 + 2; // pehle 0.4–2 tha, ab 2–5 px size
  //         return {
  //           x: Math.random() * w,
  //           y: Math.random() * h,
  //           vx: (Math.random() - 0.5) * 0.15,
  //           vy: (Math.random() - 0.5) * 0.15,
  //           r: radius,
  //           baseAlpha: Math.random() * 0.15 + 0.05, // thora zyada visible
  //           alphaShift: Math.random() * Math.PI * 2,
  //           hueShift: Math.random() * 40 - 10
  //         };
  //       }
        
  //       function drawParticle(p) {
  //         const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 12); // pehle 8 tha
  //         const hue = 270 + p.hueShift;
  //         const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.alphaShift));
  //         grd.addColorStop(0, `hsla(${hue}, 80%, 85%, ${alpha})`);
  //         grd.addColorStop(0.6, `hsla(${hue}, 70%, 60%, ${alpha * 0.35})`);
  //         grd.addColorStop(1, `rgba(0,0,0,0)`);
        
  //         ctx.beginPath();
  //         ctx.fillStyle = grd;
  //         ctx.arc(p.x, p.y, p.r * 10, 0, Math.PI * 2); // pehle 6 tha
  //         ctx.fill();
        
  //         ctx.beginPath();
  //         ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(alpha * 1.4, 0.25)})`;
  //         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  //         ctx.fill();
  //       }
          
  //     let last = performance.now();
  //     function animate(now) {
  //       const dt = Math.min(40, now - last);
  //       last = now;
    
  //       // subtle clear with low-alpha so trails are minimal
  //       ctx.clearRect(0, 0, w, h);
    
  //       for (let i = 0; i < particles.length; i++) {
  //         const p = particles[i];
  //         // update position
  //         p.x += p.vx * (dt * 0.06);
  //         p.y += p.vy * (dt * 0.06);
  //         // gentle floating (sine)
  //         p.alphaShift += 0.002 * dt;
    
  //         // wrap around edges
  //         if (p.x < -20) p.x = w + 20;
  //         if (p.x > w + 20) p.x = -20;
  //         if (p.y < -20) p.y = h + 20;
  //         if (p.y > h + 20) p.y = -20;
    
  //         drawParticle(p);
  //       }
    
  //       requestAnimationFrame(animate);
  //     }
    
  //     // initialize
  //     resize();
  //     window.addEventListener('resize', resize);
  //     // pause canvas when not visible to save CPU
  //     document.addEventListener('visibilitychange', () => {
  //       if (document.hidden) {
  //         // stop the animation loop by doing nothing; it will auto-pause as rAF won't run
  //       } else {
  //         last = performance.now();
  //         requestAnimationFrame(animate);
  //       }
  //     });
    
  //     // start anim
  //     requestAnimationFrame(animate);
  //   })();
  

  let c1 = document.getElementById("card1");
let c2 = document.getElementById("card2");
let c3 = document.getElementById("card3");
let c4 = document.getElementById("card4");
let c5 = document.getElementById("card5");
let c6 = document.getElementById("card6");


function showAll() {
  c1.classList.remove("hide");
  c2.classList.remove("hide");
  c3.classList.remove("hide");
  c4.classList.remove("hide");
  c5.classList.remove("hide");
  c6.classList.remove("hide");
}

function multi() {
  showAll();
  c2.classList.add("hide");
  c3.classList.add("hide");
  c5.classList.add("hide");
  c6.classList.add("hide");
}

function responsive() {
  showAll();
  c5.classList.add("hide");
  c6.classList.add("hide");
}

function simple() {
  showAll();
  c1.classList.add("hide");
  c2.classList.add("hide");
  c3.classList.add("hide");
  c4.classList.add("hide");
}





