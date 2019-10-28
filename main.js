window.addEventListener("keydown", function (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let x = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return null;
    audio.currentTime = 0;
    audio.play();
    x.classList.add("keyStyle");
});

window.addEventListener("keyup", function (e) {
    let x = document.querySelector(`div[data-key="${e.keyCode}"]`)
    x.classList.remove("keyStyle");
});