const tombol = document.querySelector(".tombol");
      const menu = document.querySelector(".menu");
      tombol.addEventListener("click", () => {
        menu.classList.toggle("aktif");
      });
      document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        });
      });