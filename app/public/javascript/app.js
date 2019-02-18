"use strict";

function ajaxCall(object) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(object.method, object.url);
    request.setRequestHeader("Content-Type", object.contentType);
    request.onload = () => {
      if (request.status === 200) {
        return resolve(request.response);
      } else {
        return reject(Error(req.statusText));
      }
    };
    request.onerror = (error) => {
      return reject(Error("Network Error: " + error));
    };
    request.send(object.data);
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
    const friend = {
      name: document.getElementById("name").value,
      photoLink: document.getElementById("photo-link").value,
      scores: [
        document.getElementById("question-1").value,
      ],
    };

    ajaxCall({
      contentType: "application/json",
      data: JSON.stringify(friend),
      method: "POST",
      url: "/api/friends",
    })
    .then((response) => {
      console.log(response);
    });
  }
});