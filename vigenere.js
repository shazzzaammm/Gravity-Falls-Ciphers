const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");
const keyBox = document.getElementById("key-text");
let key;
function vignereCipher() {
    let str = inputBox.value;
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    let index = -1;

    for (const letter of str) {
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }
        index++;

        out += shift(letter, calculateKeyNumber(index));
    }
    outputBox.value = out;
}

function shift(letter, key) {
    return String.fromCharCode(((letter.charCodeAt(0) + 65 - key) % 26) + 65);
}

function calculateKeyNumber(index) {
    return key.charCodeAt(index) - 65;
}

function updateKey() {
    if (keyBox.value.length == 0) {
        keyBox.value = "Gravity";
    }
    keyBox.value.replace(/\s/, "");
    keyBox.value = keyBox.value.toUpperCase();
    key = keyBox.value;
    while (key.length < inputBox.value.length) {
        key += keyBox.value.toUpperCase();
    }
}

inputBox.addEventListener("input", (e) => {
    inputBox.value = inputBox.value.toUpperCase();
    updateKey();
    vignereCipher();
});

keyBox.addEventListener("input", (e) => {
    updateKey();
});
