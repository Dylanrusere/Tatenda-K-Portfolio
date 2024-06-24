// HamBurgerMenu
const hamMenu = document.querySelector(".ham_menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});

// Pre-Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader_hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});

// Hero Section Carousel
const heroItems = document.querySelectorAll('.hero-item');
const heroControls = document.querySelectorAll('.hero-controls button');
let currentIndex = 0;

    function showHeroItem(index) {
      heroItems.forEach((item, i) => {
        item.classList.toggle('active_hero', i === index);
      });

      heroControls.forEach((button, i) => {
        button.classList.toggle('active_hero', i === index);
      });
    }

    function autoRotateHero() {
      currentIndex = (currentIndex + 1) % heroItems.length;
      showHeroItem(currentIndex);
    }

    heroControls.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIndex = index;
        showHeroItem(currentIndex);
      });
    });

    setInterval(autoRotateHero, 5000);