const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");
const keyBox = document.getElementById("key-text");
let key;
function vignereCipher(input, output, decode) {
    let str = input.value;
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    let index = -1;

    for (const letter of str) {
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }
        index++;

        out += shift(letter, calculateKeyNumber(index, decode));
    }
    output.value = out;
}

function shift(letter, key) {
    return String.fromCharCode(((letter.charCodeAt(0) + 65 - key) % 26) + 65);
}

function calculateKeyNumber(index, decode) {
    if (decode) return key.charCodeAt(index) - 65;
    else return 26 - (key.charCodeAt(index) - 65);
}

function updateKey() {
    if (keyBox.value.length == 0) {
        keyBox.value = "Gravity";
    }
    keyBox.value = keyBox.value.replace(/\s|[^A-Z^a-z]/g, "");

    keyBox.value = keyBox.value.toUpperCase();
    key = keyBox.value;
    while (key.length < inputBox.value.length) {
        key += keyBox.value.toUpperCase();
    }
}

inputBox.addEventListener("input", (e) => {
    inputBox.value = inputBox.value.toUpperCase();
    updateKey();
    vignereCipher(inputBox, outputBox, true);
});

outputBox.addEventListener("input", (e) => {
    outputBox.value = outputBox.value.toUpperCase();
    updateKey();
    vignereCipher(outputBox, inputBox, false);
});

keyBox.addEventListener("change", (e) => {
    updateKey();
});
