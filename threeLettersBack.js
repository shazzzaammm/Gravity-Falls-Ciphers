const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");
let ceasarKey = 23; // WKUHH OHWWHUV EDFN

function ceasarCipher() {
    let str = inputBox.value;
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    for (const letter of str) {
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }

        out += shift(letter, ceasarKey);
    }
    outputBox.value = out;
}

function shift(letter, key) {
    return String.fromCharCode(((letter.charCodeAt(0) - 65 + key) % 26) + 65);
}

inputBox.addEventListener("input", (e) => {
    inputBox.value = inputBox.value.toUpperCase();
    ceasarCipher();
});
