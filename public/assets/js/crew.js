fetch('crew.html')
.then(response=> response.text())
.then(text=> document.getElementById('content__crew').innerHTML = text)
.then(document.getElementById('content__crew').style.display = "none")
.then(response=> getCrewScroll());

const nav__crew = document.querySelector('ul.nav__ul > li.nav__crew');

nav__crew.addEventListener('click', function() {
    document.getElementById('content__homepage').style.display = "none";
    document.getElementById('content__destination').style.display = "none";
    document.getElementById('content__crew').style.display = "block";
    document.getElementById('content__technology').style.display = "none";
});

function getCrewScroll() {
    const crewScroll = document.querySelector("div.container");
    crewScroll.addEventListener('wheel', (e) => {
      e.preventDefault();
      crewScroll.scrollBy({
        left: e.deltaY
      });
    });
}
