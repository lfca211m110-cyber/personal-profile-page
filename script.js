const motivationText = document.getElementById("motivation-text");
const motivationBtn = document.getElementById("motivation-btn");

let isMotivationShowing = false;

motivationBtn.addEventListener("click", function () {
  if (isMotivationShowing === false) {
    motivationText.textContent = "Every day I code, I get closer to becoming a web developer and dedicate this to my lovely wife Rebecca R. Auman and to my son Othniel R. Auman.";
    motivationBtn.textContent = "Hide Motivation";
    isMotivationShowing = true;
  } else {
    motivationText.textContent = "Click the button to see my motivation.";
    motivationBtn.textContent = "Show Motivation";
    isMotivationShowing = false;
  }
});

const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light Mode";
  } else {
    darkModeBtn.textContent = "Dark Mode";
  }
});
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message-input");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    formStatus.textContent = "Please enter your name.";
    formStatus.style.color = "#dc2626";
  } else if (emailValue === "") {
    formStatus.textContent = "Please enter your email.";
    formStatus.style.color = "#dc2626";
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.style.color = "#dc2626";
  } else if (messageValue === "") {
    formStatus.textContent = "Please enter your message.";
    formStatus.style.color = "#dc2626";
  } else {
    formStatus.textContent = "Thank you! Your message has been received.";
    formStatus.style.color = "#16a34a";

    contactForm.reset();
  }
});

