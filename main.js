const ratingComponent = document.querySelector(".component__rating");
const thankComponent = document.querySelector(".component__thank");
const submitBtn = document.querySelector(".component__form-submit-btn");
const form = document.querySelector(".component__form");
const radioBtns = document.querySelectorAll(".component__form-radio");
const ratingFeedbackNum = document.querySelector(
  ".component__thank-feedback-number"
);
let feedbackValue = "";

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent rating component to display again
  if (isChecked()) {
    ratingFeedbackNum.innerHTML = feedbackValue;
    console.log(feedbackValue);
    ratingComponent.style.display = "none";
    thankComponent.style.display = "flex";
  } else {
    // window.alert("Please pick a number");
  }
});

function isChecked() {
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      feedbackValue = radioBtns[i].value;
      return true;
    }
  }
  return false;
}
