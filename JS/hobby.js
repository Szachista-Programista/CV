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
    window.scrollTo(0, 3500);
  });
document
  .getElementById("scrollLink_up_to_2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 3500);
  });
document
  .getElementById("scrollLink_down_to_2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 3500);
  });

document
  .getElementById("scrollLink3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5700);
  });
document
  .getElementById("scrollLink_up_to_3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5700);
  });
document
  .getElementById("scrollLink_down_to_3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5700);
  });
document
  .getElementById("scrollLink4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 7700);
  });
document
  .getElementById("scrollLink_up_to_4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 7700);
  });
document
  .getElementById("scrollLink_down_to_4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 7700);
  });
document
  .getElementById("scrollLink5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9600);
  });
document
  .getElementById("scrollLink_up_to_5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9600);
  });
document
  .getElementById("scrollLink_down_to_5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 9600);
  });
document
  .getElementById("scrollLink6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 11500);
  });
document
  .getElementById("scrollLink_down_to_6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 11500);
  });
document
  .getElementById("scrollLink_down_to_7")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 12600);
  });

/////////////////////BACKGROUNG COLOR/////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;

    if (0 <= scrollValue && scrollValue < 2200) {
      document.body.style.backgroundColor = `rgb(
        ${192},
        ${192},
        ${192})`;
    }
    if (2200 <= scrollValue && scrollValue < 3300) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * 0.05727 + 66},
        ${scrollValue * -0.0655 + 336},
        ${scrollValue * -0.0655 + 336})`;
    }
    if (3300 <= scrollValue && scrollValue < 4400) {
      document.body.style.backgroundColor = `rgb(
        ${255},
        ${120},
        ${120})`;
    }
    if (4400 <= scrollValue && scrollValue < 5500) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * -0.1564 + 943},
        ${scrollValue * 0.06545 - 168},
        ${scrollValue * 0.1227 - 420})`;
    }
    if (5500 <= scrollValue && scrollValue < 6600) {
      document.body.style.backgroundColor = `rgb(
        ${83},
        ${192},
        ${255})`;
    }
    if (6600 <= scrollValue && scrollValue < 7500) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * 0.1356 - 811.7},
        ${scrollValue * -0.0322 + 404.7},
        ${scrollValue * -0.1678 + 1362.3})`;
    }
    if (7500 <= scrollValue && scrollValue < 8500) {
      document.body.style.backgroundColor = `rgb(
        ${205},
        ${163},
        ${104})`;
    }
    if (8500 <= scrollValue && scrollValue < 9400) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * -0.0733 + 828.3},
        ${scrollValue * -0.1033 + 1041.3},
        ${scrollValue * 0.0856 - 623.2})`;
    }
    if (9400 <= scrollValue && scrollValue < 10300) {
      document.body.style.backgroundColor = `rgb(
        ${139},
        ${70},
        ${181})`;
    }
    if (10300 <= scrollValue && scrollValue < 11300) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * 0.021 - 77.3},
        ${scrollValue * 0.09 - 857},
        ${scrollValue * -0.021 + 397.3})`;
    }
    if (11300 <= scrollValue) {
      document.body.style.backgroundColor = `rgb(
        ${160},
        ${160},
        ${160})`;
    }
  });
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
