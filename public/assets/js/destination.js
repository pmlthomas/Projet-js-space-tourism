fetch('destination-moon.html')
.then(response=> response.text())
.then(text=> document.getElementById('content__destination').innerHTML = text)
.then(document.getElementById('content__destination').style.display = "none")
.then(response=> getPlanetNav());

function getPlanetNav () {
    const liItems = document.querySelectorAll('ul.destination__ul > li');
    liItems.forEach((liItem) => {
        
        liItem.addEventListener('click', () => {
            document.querySelector('li.destination__li--active').classList.remove('destination__li--active');
            liItem.classList.add('destination__li--active');
        })
    }); 
    liItems[0].addEventListener('click', () => {
        document.querySelector('div.destination__img').innerHTML = '<img src="./public/assets/images/destination/image-moon.png">';
        document.querySelector('h1.destination__planet').innerText = "Moon";
        document.querySelector('p.destination__text').innerHTML = "<p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>";
        document.querySelector('div.destination__stats--left > p.destination__stats--bottom').innerText = "384,400 km";
        document.querySelector('div.destination__stats--right > p.destination__stats--bottom').innerText = "3 days";
    });
    liItems[1].addEventListener('click', () => {
        document.querySelector('div.destination__img').innerHTML = '<img src="./public/assets/images/destination/image-mars.png">';
        document.querySelector('h1.destination__planet').innerText = "Mars";
        document.querySelector('p.destination__text').innerHTML = "<p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>";
        document.querySelector('div.destination__stats--left > p.destination__stats--bottom').innerText = " 225 mil. km";
        document.querySelector('div.destination__stats--right > p.destination__stats--bottom').innerText = "9 months";
    });
    liItems[2].addEventListener('click', () => {
        document.querySelector('div.destination__img').innerHTML = '<img src="./public/assets/images/destination/image-europa.png">';
        document.querySelector('h1.destination__planet').innerText = "Europa";
        document.querySelector('p.destination__text').innerHTML = "<p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>";
        document.querySelector('div.destination__stats--left > p.destination__stats--bottom').innerText = "628 mil. km";
        document.querySelector('div.destination__stats--right > p.destination__stats--bottom').innerText = "3 years";
    });
    liItems[3].addEventListener('click', () => {
        document.querySelector('div.destination__img').innerHTML = '<img src="./public/assets/images/destination/image-titan.png">';
        document.querySelector('h1.destination__planet').innerText = "Titan";
        document.querySelector('p.destination__text').innerHTML = "<p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>";
        document.querySelector('div.destination__stats--left > p.destination__stats--bottom').innerText = "1.6 bil. km";
        document.querySelector('div.destination__stats--right > p.destination__stats--bottom').innerText = "7 years";
    });
}