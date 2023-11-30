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
    document.documentElement.scrollTop = 270;
});
////////////////////////////////////////////////////
document
    .getElementById("scrollLink1")
    .addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo(0, 1600);
    });

document
    .getElementById("scrollLink2")
    .addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo(0, 2900);
    });

document
    .getElementById("scrollLink3")
    .addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo(0, 4200);
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

        if (300 <= scrollValue && scrollValue < 1600) {
            document.body.style.backgroundColor = `rgb(
        ${27},
        ${-scrollValue / 100 + 30},
        ${27})`;
        }
        if (1600 <= scrollValue && scrollValue < 2900) {
            document.body.style.backgroundColor = `rgb(
        ${27},
        ${14},
        ${-scrollValue / 100 + 43})`;
        }
        if (2900 <= scrollValue && scrollValue < 4200) {
            document.body.style.backgroundColor = `rgb(
        ${27},
        ${scrollValue / 100 - 15},
        ${scrollValue / 100 - 15})`;
        }
    });
});
