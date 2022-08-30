const items = document.querySelectorAll('ul.nav__ul > li');
items.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector("li.nav__home--active").classList.remove("nav__home--active");
        item.classList.add("nav__home--active");
    })
});

// pc and tablet navbar

items[0].addEventListener('click', () => {
    document.getElementById('content__homepage').style.display = "";
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "none";
});
items[1].addEventListener('click', () => {
    document.getElementById('content__destination').style.display = "";
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "none";
});
items[2].addEventListener('click', () => {
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__crew').style.display = "";
    document.getElementById('content__technology').style.display = "none";
});
items[3].addEventListener('click', () => {
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "";
});

// phone navbar

const mobileLis = document.querySelectorAll('ul.mobileUl > li');
mobileLis.forEach((mobileLi) => {
    mobileLi.addEventListener('click', () => {
        document.querySelector('div.mobileNav--active').classList.replace('mobileNav--active', 'mobileNav');
        document.querySelector('img.nav__bars').style.display = "";
    })
});
mobileLis[0].addEventListener('click', () => {
    document.getElementById('content__homepage').style.display = "";
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "none";
});
mobileLis[1].addEventListener('click', () => {
    document.getElementById('content__destination').style.display = "";
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "none";
});
mobileLis[2].addEventListener('click', () => {
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__crew').style.display = "";
    document.getElementById('content__technology').style.display = "none";
});
mobileLis[3].addEventListener('click', () => {
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "";
});

// opening and closing of phone navbar

const mobilesNavLogo = document.getElementsByClassName('nav__bars');
mobilesNavLogo[0].addEventListener('click', () => {
    document.querySelector('div.mobileNav').classList.replace('mobileNav', 'mobileNav--active');
    document.querySelector('img.nav__bars').style.display = "none";
});

document.querySelector('ul.mobileUl > img.nav__up').addEventListener('click', () => {
    document.querySelector('div.mobileNav--active').classList.replace('mobileNav--active', 'mobileNav');
    document.querySelector('img.nav__bars').style.display = "block";
});