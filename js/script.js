var openFeedback = document.querySelector(".bnt-contacts"); // Кнопка обратно связи.
var windowFeedback = document.querySelector(".feedback-window"); // Окно формы.
var closeFeedback = windowFeedback.querySelector(".button-close"); // Кнопка закрытия.
var name = windowFeedback.querySelector(".enter-name");       // Поле ввода имени
var mail = windowFeedback.querySelector(".enter-mail");       // Поле эл.почты
var feiled = windowFeedback.querySelector(".input-field");   // Поле ввода текста
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
    windowFeedback.classList.remove("feedback-error"); // убират класс ошибки
    overlay.classList.remove("overlay-on");            // убирает оверлай
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
  windowFeedback.addEventListener("submit", function(evt) {
    if (!name.value || mail.value || feiled.value) {
      evt.preventDefault();
      windowFeedback.classList.add("feedback-error");
    } else {

    }
  })