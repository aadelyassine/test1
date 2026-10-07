const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async function(event) {

  event.preventDefault();

  const formData = new FormData(form);

  try {

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    if (response.ok) {

      formMessage.textContent =
        "Bedankt! We nemen zo snel mogelijk contact met u op.";

      form.reset();

    } else {

      formMessage.textContent =
        "Er is iets misgegaan. Probeer het opnieuw.";

    }

  } catch (error) {

    formMessage.textContent =
      "Er is iets misgegaan. Probeer het opnieuw.";

  }

});
