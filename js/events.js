function makeGreen() {
    document.body.style.backgroundColor = 'lightgreen';
}

// handle blue button by setting function name
const makeBlueBtn = document.getElementById('blueButton');
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
    makeBlue;
}
// handle anonimous function
const makeOrangeButton = document.getElementById('orangeButton');
makeOrangeButton.onclick = function () {
    document.body.style.backgroundColor = 'orange';
}

// handle by adding addEventListener
const goldenButton = document.getElementById('goldenrod');
goldenButton.addEventListener('click', makeGolden);
function makeGolden() {
    document.body.style.backgroundColor = 'Chartreuse';
}

// add eventListener
const hotPinkButton = document.getElementById('hotpink');
hotPinkButton.addEventListener('click', function makeHotPink() {
    document.body.style.backgroundColor = 'hotpink';
})

// handle shortcut
document.getElementById('lightblue').addEventListener('click', function makeLightBlue() {
    document.body.style.backgroundColor = 'lightblue';
})