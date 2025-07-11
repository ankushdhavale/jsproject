const mainDiv = document.querySelector("#main");
const subDiv = document.querySelector(".sub-main");
const body = document.body;
document.addEventListener('keydown', function (e) {
    if (e.key === 'g' || e.key===' ') {
        mainDiv.style.marginLeft = Math.round(Math.random() * 60) + "%";
        body.style.backgroundColor = `#${Math.floor(Math.random()*1000000)}`;
    }
    if (e.key === 'h' || e.key===' ') {
        mainDiv.style.marginRight = Math.round(Math.random() * 60) + "%";
        body.style.backgroundColor = `#${Math.floor(Math.random()*1000000)}`;
    }
    subDiv.style.background = `linear-gradient(to bottom left,#${Math.floor(Math.random()*1000000)},#${Math.floor(Math.random()*1000000)},#${Math.floor(Math.random()*1000000)},#${Math.floor(Math.random()*1000000)})`

})


