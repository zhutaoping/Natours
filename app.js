const navCheckbox = document.querySelector(".navigation__checkbox");
const navItems = document.querySelectorAll(".navigation__item");
navItems.forEach((item) =>
  item.addEventListener("click", () => (navCheckbox.checked = false))
);
