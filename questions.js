(() => {
  document.querySelectorAll("[data-questions]").forEach((slot, index) => {
    slot.innerHTML = `<section class="questions-floor"><div class="wrap questions-layout"><div class="questions-copy"><p class="eyebrow eyebrow-light">МЫ НА СВЯЗИ</p><h2>Остались вопросы?<br><em>Задайте их нам.</em></h2><p>Опишите задачу — поможем сориентироваться по составу команды, срокам и расчёту.</p><span class="questions-time"><i></i>Ответим в течение 2 часов</span></div><form class="questions-form" id="questions-${index}"><label>Как к вам обращаться<input name="name" placeholder="Ваше имя"></label><label>Телефон<input name="phone" type="tel" placeholder="+7 (___) ___-__-__" required></label><label>Комментарий<textarea name="comment" rows="2" placeholder="Коротко опишите вопрос"></textarea></label><button class="button button-cyan" type="submit">Жду звонка <span>↗</span></button><small>Демонстрационная форма: подключение отправки заявок добавим при подготовке сайта к запуску.</small><p class="form-message" role="status"></p></form></div></section>`;
    slot.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      event.currentTarget.querySelector(".form-message").textContent = "Спасибо! Форма пока работает в режиме прототипа.";
    });
  });
})();
