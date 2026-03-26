document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.scrollTo({
      left: slider.clientWidth * currentIndex,
      behavior: "smooth"
    });
  }, 4500);

  window.addEventListener("resize", () => {
    slider.scrollTo({
      left: slider.clientWidth * currentIndex,
      behavior: "auto"
    });
  });
});