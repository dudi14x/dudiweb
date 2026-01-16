// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Background dots & squares
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener("resize", resize);
resize();

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  s: Math.random() * 2 + 0.5,
  v: Math.random() * 0.4 + 0.1
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(167,139,250,0.8)";
  particles.forEach(p => {
    ctx.fillRect(p.x, p.y, p.s, p.s);
    p.y += p.v;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(draw);
}
draw();
