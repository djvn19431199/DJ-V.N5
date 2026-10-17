document.addEventListener("DOMContentLoaded", () => {
  // Use relative asset paths so GitHub Pages can load the hero image from the repository.
  const hero = document.querySelector(".hero-image");
  if (hero) {
    hero.addEventListener("error", () => {
      console.error("Hero image could not load. Check that assets/dj-vn-hero.png is uploaded with the same capitalization.");
    });
  }
});
