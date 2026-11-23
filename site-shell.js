(() => {
  const data = window.SITE_CONTENT;
  const groups = [...new Set(data.services.map(item => item.group))];
  const dock = document.querySelector("#services-dropdown");
  if (dock) dock.innerHTML = groups.map((group, index) => `<a href="category.html?group=${data.groupInfo[group].id}"><span class="dock-index">0${index + 1}</span><span>${group}</span><b aria-hidden="true">↗</b></a>`).join("");
  const nav = document.querySelector(".nav"), toggle = document.querySelector(".menu-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", open);
      nav.classList.toggle("nav-open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }
})();
