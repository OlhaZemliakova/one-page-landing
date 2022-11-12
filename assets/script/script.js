function toogleMenu() {
  const menu = document.querySelector(".header__nav");
  //   if (menu.style.display === "block") {
  //     menu.style.display = "none";
  //   } else {
  //     menu.style.display = "block";
  //   }
  menu.classList.toggle("active");
}

function handleMobileNavigation() {
  const button = document.querySelector(".burger-button");
  button.addEventListener("click", toogleMenu);
}

handleMobileNavigation();

