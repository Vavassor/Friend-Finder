"use strict";

function ajaxCall(spec) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(spec.method, spec.url);
    request.setRequestHeader("Content-Type", spec.contentType);
    request.onload = () => {
      if (request.status === 200) {
        return resolve(request.response);
      } else {
        return reject(Error(request.statusText));
      }
    };
    request.onerror = (error) => {
      return reject(Error("Network Error: " + error));
    };
    request.send(spec.data);
  });
}


const survey = document.getElementById("survey");

survey.addEventListener("submit", (event) => {
  event.preventDefault();

  const passedValidation = survey.checkValidity();
  survey.classList.add("was-validated");

  if (passedValidation === false) {
    event.stopPropagation();
  } else {
    const person = {
      name: document.getElementById("name").value,
      photoLink: document.getElementById("photo-link").value,
      scores: [
        parseInt(document.getElementById("question-1").value),
        parseInt(document.getElementById("question-2").value),
        parseInt(document.getElementById("question-3").value),
        parseInt(document.getElementById("question-4").value),
        parseInt(document.getElementById("question-5").value),
        parseInt(document.getElementById("question-6").value),
        parseInt(document.getElementById("question-7").value),
        parseInt(document.getElementById("question-8").value),
        parseInt(document.getElementById("question-9").value),
        parseInt(document.getElementById("question-10").value),
      ],
    };

    ajaxCall({
      contentType: "application/json",
      data: JSON.stringify(person),
      method: "POST",
      url: "/api/friends",
    })
    .then((response) => {
      console.log(response);
    });
  }
});