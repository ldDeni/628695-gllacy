var openFeedback = document.querySelector(".bnt-contacts"); // Кнопка обратно связи.
var windowFeedback = document.querySelector(".feedback-window"); // Окно формы.
var closeFeedback = windowFeedback.querySelector(".button-close"); // Кнопка закрытия.
var name = windowFeedback.querySelector(".enter-name");
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

