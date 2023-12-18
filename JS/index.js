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
    window.scrollTo(0, 1450);
  });
document
  .getElementById("scrollLink_up_to_1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 1450);
  });

document
  .getElementById("scrollLink2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 2750);
  });
document
  .getElementById("scrollLink_up_to_2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 2750);
  });
document
  .getElementById("scrollLink_down_to_2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 2750);
  });

document
  .getElementById("scrollLink3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4050);
  });
document
  .getElementById("scrollLink_up_to_3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4050);
  });
document
  .getElementById("scrollLink_down_to_3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 4050);
  });
document
  .getElementById("scrollLink4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5850);
  });
document
  .getElementById("scrollLink_down_to_4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo(0, 5850);
  });

/////////////////////CLOCK/////////////////////////
function clock() {
  var time = new Date();

  var hour = time.getHours();
  if (hour < 10) hour = "0" + hour;
  var minute = time.getMinutes();
  if (minute < 10) minute = "0" + minute;
  var second = time.getSeconds();
  if (second < 10) second = "0" + second;

  document.getElementById("time").innerHTML =
    hour + ":" + minute + ":" + second;

  setTimeout("clock()", 1000);
}
/////////////////////BACKGROUNG COLOR/////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;

    if (0 <= scrollValue && scrollValue < 800) {
      document.body.style.backgroundColor = `rgb(
        ${14},
        ${14},
        ${14})`;
    }
    if (800 <= scrollValue && scrollValue < 1200) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * 0.0325 - 12},
        ${14},
        ${scrollValue * 0.0325 - 12})`;
    }
    if (1200 <= scrollValue && scrollValue < 2000) {
      document.body.style.backgroundColor = `rgb(
        ${27},
        ${14},
        ${27})`;
    }
    if (2000 <= scrollValue && scrollValue < 2500) {
      document.body.style.backgroundColor = `rgb(
        ${27},
        ${14},
        ${scrollValue * -0.026 + 79})`;
    }
    if (2500 <= scrollValue && scrollValue < 3200) {
      document.body.style.backgroundColor = `rgb(
        ${27},
        ${14},
        ${14})`;
    }
    if (3200 <= scrollValue && scrollValue < 3800) {
      document.body.style.backgroundColor = `rgb(
        ${scrollValue * -0.0217 + 96.3},
        ${14},
        ${scrollValue * 0.0217 - 55.3})`;
    }
    if (3800 <= scrollValue && scrollValue < 5000) {
      document.body.style.backgroundColor = `rgb(
        ${14},
        ${14},
        ${27})`;
    }
    if (5000 <= scrollValue && scrollValue < 5600) {
      document.body.style.backgroundColor = `rgb(
        ${14},
        ${14},
        ${scrollValue * -0.0217 + 135.3})`;
    }
    if (5600 <= scrollValue) {
      document.body.style.backgroundColor = `rgb(
        ${14},
        ${14},
        ${14})`;
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
        }, 50);
      });
    } else {
      movingDivs.forEach(function (div) {
        div.classList.add("moved_down");
        setTimeout(function () {
          div.classList.remove("moved_down");
        }, 50);
      });
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
