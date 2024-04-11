const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

/* Set class dynamically to apply css defined */
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
