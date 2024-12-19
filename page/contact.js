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


const scriptURL = 'https://script.google.com/macros/s/AKfycbxX5lPpbkSZfCla2_qtk6p4j48Au-qrJ-ns5UF7574/dev'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully <3." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})