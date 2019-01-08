var openFeedback = document.querySelector(".bnt-contacts");
var windowFeedback = document.querySelector(".feedback-window");
var closeFeedback = windowFeedback.querySelector(".button-close");
var name = windowFeedback.querySelector(".enter-name");
var mail = windowFeedback.querySelector(".enter-mail");
var feiled = windowFeedback.querySelector(".input-field");
var overlay = document.querySelector(".overlay");

openFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  windowFeedback.classList.add("feedback-open");
  overlay.classList.add("overlay-on");
  name.focus();
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  windowFeedback.classList.remove("feedback-open");
  windowFeedback.classList.remove("feedback-error")
  overlay.classList.remove("overlay-on");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  windowFeedback.classList.remove("feedback-open");
  windowFeedback.classList.remove("feedback-error");
  overlay.classList.remove("overlay-on");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (windowFeedback.classList.contains("feedback-open")) {
      windowFeedback.classList.remove("feedback-open");
      windowFeedback.classList.remove("feedback-error");
      overlay.classList.remove("overlay-on");
    }
  }
});

windowFeedback.addEventListener("submit", function (evt) {
  if (!name.value || mail.value || feiled.value) {
    evt.preventDefault();
    windowFeedback.classList.add("feedback-error");
  }
});
