window.addEventListener("scroll", function () {
  var tło = document.querySelector("#tło");
  var scrolled = window.scrollY;
  tło.style.transform = "translateY(" + scrolled * 0.65 + "px)";
});
