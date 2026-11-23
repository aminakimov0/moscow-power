(() => {
  const data = window.SITE_CONTENT;
  document.querySelectorAll("[data-content]").forEach(el => { el.innerHTML = data[el.dataset.content] || ""; });
  const groups = [...new Set(data.services.map(item => item.group))];
  const serviceGrid = document.querySelector("#service-grid");
  serviceGrid.innerHTML = groups.map(group => {
    const info = data.groupInfo[group];
    return `<a class="category-card" href="category.html?group=${info.id}" style="--category-image:url('${info.image}')"><span class="category-title">${group}</span></a>`;
  }).join("");
  const dropdown = document.querySelector("#services-dropdown");
  dropdown.innerHTML = groups.map((group, index) => `<a href="category.html?group=${data.groupInfo[group].id}"><span class="dock-index">0${index + 1}</span><span>${group}</span><b aria-hidden="true">↗</b></a>`).join("");
  document.querySelector("#quick-service").innerHTML = groups.map(group => `<option>${group}</option>`).join("");
  document.querySelector("#about-points").innerHTML = data.advantages.map(item => `<article class="point"><span class="point-check">✓</span><div><h3>${item.title}</h3><p>${item.text}</p></div></article>`).join("");
  const nav = document.querySelector(".nav"), mobile = document.querySelector(".menu-toggle");
  mobile.addEventListener("click", () => { const open = mobile.getAttribute("aria-expanded") !== "true"; mobile.setAttribute("aria-expanded", open); nav.classList.toggle("nav-open", open); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("nav-open"); mobile.setAttribute("aria-expanded", "false"); }));
  document.querySelector("#express-form").addEventListener("submit", event => { event.preventDefault(); event.currentTarget.querySelector(".form-message").textContent = "Спасибо! Это макет формы, отправка заявок пока не подключена."; });
})();
