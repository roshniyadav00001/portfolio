// Scroll animation effect
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
