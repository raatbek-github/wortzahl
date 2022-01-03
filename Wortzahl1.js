const countTarget = document.querySelector("#word-count-input");
const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");
const count = function () {
    const characters = countTarget.value;
    const characterLength = characters.length;
    const words = characters.split(/[/n/r/s]+/g).filter(function (word) {
        return word.length > 0;
    });
    wordCount.innerHTML = words.length;
    characterCount.innerHTML = characterLength;


};
count();
window.addEventListener(
    "input",
    function (event) {
        if (event.target.matches("#word-count-input")) {
            count();
        }
    },
    false
);