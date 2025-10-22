"use strict";

const fullName = document.querySelector("[data-testid='test-contact-name']");
const email = document.querySelector("[data-testid='test-contact-email']");
const subject = document.querySelector("[data-testid='test-contact-subject']");
const message = document.querySelector("[data-testid='test-contact-message']");
const fullNameError = document.querySelector(
  "[data-testid='test-contact-error-name']"
);
const emailError = document.querySelector(
  "[data-testid='test-contact-error-email']"
);
const subjectError = document.querySelector(
  "[data-testid='test-contact-error-subject']"
);
const messageError = document.querySelector(
  "[data-testid='test-contact-error-message']"
);

const sendBtn = document.querySelector("[data-testid='test-contact-submit']");
const successMessage = document.querySelector(
  "[data-testid='test-contact-success']"
);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validInput(inputValue, validLen, errorMessage, errorPlaceholder) {
  errorPlaceholder.textContent = "";
  if (inputValue.value.length < validLen) {
    errorPlaceholder.textContent = errorMessage;
    return false;
  }
  return true;
}

function validEmail(email) {
  emailError.textContent = "";
  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    return false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  }
  return true;
}

function handleSubmit(e) {
  e.preventDefault();
  const validFormInput =
    validInput(fullName, 3, `Name must be atleast 3character`, fullNameError) &&
    validEmail(email) &&
    validInput(
      subject,
      5,
      `Subject must be atleast 5 character`,
      subjectError
    ) &&
    validInput(
      message,
      10,
      `Message must be atleast 10 character`,
      messageError
    );

  if (!validFormInput) {
    return;
  }

  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
  fullName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}

sendBtn.addEventListener("click", handleSubmit);
