
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-solid-bg");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});
