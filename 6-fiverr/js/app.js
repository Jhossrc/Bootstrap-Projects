window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const headerScroll = document.getElementById("header-scroll");

  if (scroll > 300) {
    headerScroll.classList.add("activo");
  } else {
    headerScroll.classList.remove('activo');
  }
});
