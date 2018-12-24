var openFeedback = document.querySelector(".bnt-contacts"); // Кнопка обратно связи.
var windowFeedback = document.querySelector(".feedback-window"); // Окно формы.
var closeFeedback = windowFeedback.querySelector(".button-close"); // Кнопка закрытия.
var name = windowFeedback.querySelector(".enter-name");
var mail = windowFeedback.querySelector(".enter-mail");
var overlay = document.querySelector(".overlay");

openFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    windowFeedback.classList.add("feedback-open");   // открывает форму обратной связи.
    overlay.classList.add("overlay-on");
    name.focus();
});

closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    windowFeedback.classList.remove("feedback-open");   // закрывает форму обратной связи.
    overlay.classList.remove("overlay-on");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (windowFeedback.classList.contains("feedback-open")) {
        windowFeedback.classList.remove("feedback-open");
        overlay.classList.remove("overlay-on");
      }
    }
  });

if (!name.value || mail.value) {

}

form.addEventListener("submit", function (evt) {
    if (!name.value || mail.value) {
      evt.preventDefault();
      windowFeedbac.classList.add("feedback-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });