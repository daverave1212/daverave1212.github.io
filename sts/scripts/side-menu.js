function showSideMenu() {
  document.getElementById("sideMenu").classList.add("side-menu--open");
  document.getElementById("sideMenuOverlay").classList.add("side-menu-overlay--open");
  document.body.classList.add("menu-open");

  document.addEventListener("pointerdown", onOutsideClick);
}

function hideSideMenu() {
  document.getElementById("sideMenu").classList.remove("side-menu--open");
  document.getElementById("sideMenuOverlay").classList.remove("side-menu-overlay--open");
  document.body.classList.remove("menu-open");

  document.removeEventListener("pointerdown", onOutsideClick);
}


function onOutsideClick(e) {
  if (!document.getElementById("sideMenu").contains(e.target)) {
    hideSideMenu();
  }
}
