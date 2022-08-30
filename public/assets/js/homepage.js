fetch('homepage.html')
.then(response=> response.text())
.then(text=> document.getElementById('content__homepage').innerHTML = text)
.then(document.getElementById('content__homepage').style.display = "block");
