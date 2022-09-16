var  typed = new Typed(".auto-type", {
    strings: ["Your Pets!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


var header = document.querySelector('.fixed-top');

function changeColor() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('js-header');
    } else {
        header.classList.remove('js-header');
    }
}

document.addEventListener('scroll',changeColor);


var menuBtn = document.querySelector('.menu-btn');
var navLists = document.querySelector('.nav-lists');

function showNav() {
    if (window.getComputedStyle(navLists).display === 'none') {
        navLists.style.display = 'block';
    } else {
        navLists.style.display = 'none';
    }
}

menuBtn.addEventListener('click',showNav);

var navItems = document.querySelectorAll('.nav-items');

function hideNav() {
    if (window.matchMedia("(max-width: 1023px)").matches) {
        navLists.style.display = 'none';
    }
}

for (var navItem of navItems) {
    navItem.addEventListener('click', hideNav);
}
