fetch('technology.html')
.then(response=> response.text())
.then(text=> document.getElementById('content__technology').innerHTML = text)
.then(document.getElementById('content__technology').style.display = "none")
.then(response=> getTechnologies());

const technologyNav = document.querySelector('ul.nav__ul > li.nav__technology');
technologyNav.addEventListener('click', () => {
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__crew').style.display = "none";
    document.getElementById('content__technology').style.display = "block";
});

function getTechnologies() {
    const techCircles = document.querySelectorAll('div.tech__numbers > div');
    techCircles.forEach((techCircle) => {
        techCircle.addEventListener('click', () => {
            document.querySelector('div.tech__numbers > div.tech__numbers--active').classList.remove('tech__numbers--active');
            techCircle.classList.add('tech__numbers--active');
        });
    });
    techCircles[0].addEventListener('click', () => {
        document.querySelector('h1.tech__text--title').innerText = 'LAUNCH VEHICULE';
        document.querySelector('p.tech__text--text').innerText = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!';
        document.querySelector('div.tech__img').innerHTML = '<div class="tech__img--1"><img src="./public/assets/images/technology/image-launch-vehicle-portrait.jpg"></div>';
    });
    techCircles[1].addEventListener('click', () => {
        document.querySelector('h1.tech__text--title').innerText = 'SPACEPORT';
        document.querySelector('p.tech__text--text').innerText = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';
        document.querySelector('div.tech__img').innerHTML = '<div class="tech__img--2"><img src="./public/assets/images/technology/image-spaceport-landscape.jpg"></div>';
    });
    techCircles[2].addEventListener('click', () => {
        document.querySelector('h1.tech__text--title').innerText = 'SPACE CAPSULE';
        document.querySelector('p.tech__text--text').innerText = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you \'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.';
        document.querySelector('div.tech__img').innerHTML = '<div class="tech__img--3"><img src="./public/assets/images/technology/image-space-capsule-landscape.jpg"></div>';
    });
}