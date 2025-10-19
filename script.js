document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menuBtn");
  const bar = document.querySelector(".barmenu");
  if (!btn || !bar) return;

  btn.addEventListener("click", () => {
    bar.classList.toggle("active");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") bar.classList.remove("active");
  });
});
