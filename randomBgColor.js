let bgColorArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let bgContainerEl = document.getElementById("bgContainer");

function onChangeBgColor() {
    let bgColorArrayLength = bgColorArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * bgColorArrayLength);
    let randomBgColor = bgColorArray[randomBgColorIndex];
    bgContainerEl.style.backgroundColor = randomBgColor;

    if (randomBgColorIndex === bgColorArrayLength) {
        randomBgColorIndex = bgColorArrayLength - 1;
    }
}