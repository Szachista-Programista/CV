/////////////////////BACKGROUND////////////////////
window.addEventListener("scroll", function () {
  var background = document.querySelector("#background3");
  var scrolled = window.scrollY;
  background.style.transform = "translateY(" + scrolled * 0.75 + "px)";
});
window.addEventListener("scroll", function () {
  var background = document.querySelector("#background2");
  var scrolled = window.scrollY;
  background.style.transform = "translateY(" + scrolled * 0.5 + "px)";
});
window.addEventListener("scroll", function () {
  var background = document.querySelector("#background1");
  var scrolled = window.scrollY;
  background.style.transform = "translateY(" + scrolled * 0.25 + "px)";
});
/////////////////////SCROLLBAR//////////////////////

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.scrollTop = 50;
});
////////////////////////////////////////////////////

document
  .getElementById("scrollLink_up_to_0")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 50);
  });
document
  .getElementById("scrollLink1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 1400);
  });
document
  .getElementById("scrollLink_up_to_1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 1400);
  });

document
  .getElementById("scrollLink2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 2800);
  });
document
  .getElementById("scrollLink_up_to_2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 2800);
  });
document
  .getElementById("scrollLink_down_to_2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 2800);
  });
document
  .getElementById("scrollLink3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4000);
  });
document
  .getElementById("scrollLink33")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4000);
  });
document
  .getElementById("scrollLink_up_to_3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4000);
  });
document
  .getElementById("scrollLink_down_to_3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4000);
  });
document
  .getElementById("scrollLink4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5200);
  });
document
  .getElementById("scrollLink_up_to_4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5200);
  });
document
  .getElementById("scrollLink_down_to_4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5200);
  });
document
  .getElementById("scrollLink4.5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 6500);
  });
document
  .getElementById("scrollLink_up_to_4.5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 6500);
  });
document
  .getElementById("scrollLink_down_to_4.5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 6500);
  });
document
  .getElementById("scrollLink5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 7800);
  });
document
  .getElementById("scrollLink_up_to_5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 7800);
  });
document
  .getElementById("scrollLink_down_to_5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 7800);
  });
document
  .getElementById("scrollLink6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9400);
  });
document
  .getElementById("scrollLink66")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9200);
  });
document
  .getElementById("scrollLink6666")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9700);
  });
document
  .getElementById("scrollLink_down_to_6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9200);
  });
document
  .getElementById("scrollLink_down_to_7")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 10300);
  });
////////////////////moving///divs///////////////////
document.addEventListener("DOMContentLoaded", function () {
  var movingDivs = document.querySelectorAll(".moving_div");
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
      movingDivs.forEach(function (div) {
        div.classList.add("moved_up");
        setTimeout(function () {
          div.classList.remove("moved_up");
        }, 100);
      });
    } else {
      movingDivs.forEach(function (div) {
        div.classList.add("moved_down");
        setTimeout(function () {
          div.classList.remove("moved_down");
        }, 100);
      });
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
