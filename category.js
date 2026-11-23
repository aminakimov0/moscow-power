(() => {
  const data = window.SITE_CONTENT;
  document.querySelectorAll("[data-content]").forEach(el => { el.innerHTML = data[el.dataset.content] || ""; });
  document.querySelectorAll("[data-href]").forEach(el => { el.href = data[el.dataset.href] || "#"; });
  const id = new URLSearchParams(location.search).get("group");
  const entry = Object.entries(data.groupInfo).find(([, info]) => info.id === id);
  const [group, info] = entry || ["Грузчики и переезды", data.groupInfo["Грузчики и переезды"]];
  const services = data.services.filter(service => service.group === group);
  document.title = `${group} в Москве — ${data.brand}`;
  document.querySelector("#category-title").textContent = group;
  document.querySelector("#breadcrumb-title").textContent = group;
  document.querySelector("#category-description").textContent = `${info.caption}. Подберём подходящий формат работ для объекта в Москве, согласуем состав команды, время и стоимость до начала.`;
  const image = document.querySelector("#category-image"); image.src = info.image; image.alt = info.caption;
  document.querySelector("#detail-services").innerHTML = services.map(service => `<article class="detail-service"><span class="detail-mark"></span><h3>${service.title}</h3><p>${service.text}</p><a href="contacts.html">Обсудить услугу <span>→</span></a></article>`).join("");
  const groups = [...new Set(data.services.map(service => service.group))];
  document.querySelector("#services-dropdown").innerHTML = groups.map((name, index) => `<a href="category.html?group=${data.groupInfo[name].id}"><span class="dock-index">0${index + 1}</span><span>${name}</span><b aria-hidden="true">↗</b></a>`).join("");
  const menu = document.querySelector(".menu-toggle");
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", open); document.querySelector(".nav").classList.toggle("nav-open", open); });
})();
