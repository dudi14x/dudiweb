const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  toggle.textContent = body.classList.contains("light") ? "☀️" : "🌙";
});
