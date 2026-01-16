// Smooth scrolling (safe)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Active nav on scroll (stable)
const sections = Array.from(document.querySelectorAll("section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav-link"))
  .filter(a => a.getAttribute("href") && a.getAttribute("href").startsWith("#"));

const setActive = () => {
  const y = window.scrollY + 140; // account for fixed nav
  let current = sections[0]?.id;

  for (const s of sections) {
    if (s.offsetTop <= y) current = s.id;
  }

  navLinks.forEach(a => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === `#${current}`);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
window.addEventListener("load", setActive);

// Ripple click SFX (visual)
document.querySelectorAll(".ripple").forEach(el => {
  el.addEventListener("click", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--rx", `${x}px`);
    el.style.setProperty("--ry", `${y}px`);

    el.classList.remove("rippling");
    // force reflow
    void el.offsetWidth;
    el.classList.add("rippling");

    // cleanup
    setTimeout(() => el.classList.remove("rippling"), 650);
  });
});
