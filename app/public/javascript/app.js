"use strict";


$("#survey").submit((event) => {
  event.preventDefault();

  const passedValidation = survey.checkValidity();
  survey.classList.add("was-validated");

  if (passedValidation === false) {
    event.stopPropagation();
  } else {
    const person = {
      name: $("#name").val(),
      photoLink: $("#photo-link").val(),
      scores: [
        parseInt($("#question-1").val()),
        parseInt($("#question-2").val()),
        parseInt($("#question-3").val()),
        parseInt($("#question-4").val()),
        parseInt($("#question-5").val()),
        parseInt($("#question-6").val()),
        parseInt($("#question-7").val()),
        parseInt($("#question-8").val()),
        parseInt($("#question-9").val()),
        parseInt($("#question-10").val()),
      ],
    };

    $.ajax("/api/friends", {
      contentType: "application/json",
      data: JSON.stringify(person),
      dataType: "json",
      method: "POST",
    })
    .then((response) => {
      const friend = response;

      $("#friend-name").text(friend["name"]);
      $("#friend-photo").attr("src", friend["photo"]);

      $("#match-modal").modal("show");
    });
  }
});