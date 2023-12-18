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
/*document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.scrollTop = 270;
});*/
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
//////////////////////////SLIDER////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let count = 0;

    function nextSlide() {
        count++;
        if (count > slider.children.length - 1) {
            count = 0;
        }
        updateSlider();
    }

    function updateSlider() {
        const translation = -count * 100 + "%";
        slider.style.transform = `translateX(${translation})`;
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);
});
