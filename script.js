(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();
// Placeholder for animations or future logic
console.log("Portfolio loaded");
