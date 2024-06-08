window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.querySelector(".header");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}