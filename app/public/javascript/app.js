"use strict";

const survey = document.getElementById("survey");

survey.addEventListener("submit", (event) => {
  event.preventDefault();

  const passedValidation = survey.checkValidity();
  survey.classList.add("was-validated");

  if (passedValidation === false) {
    event.stopPropagation();
  } else {
    console.log("Placeholder for submission!");
  }
});