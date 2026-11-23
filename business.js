(() => {
  const form = document.querySelector("#business-request-form");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    form.querySelector(".form-message").textContent = "Спасибо! Заявка заполнена в режиме прототипа; подключение отправки добавим перед запуском.";
  });
})();
