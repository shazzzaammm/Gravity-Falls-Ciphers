const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");
let threeLettersForward = 3; // WKUHH OHWWHUV EDFN
let threeLettersBack = 23; // THREE LETTERS BACK

function ceasarCipher(input, output, key) {
    let str = input.value.toUpperCase();
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    for (const letter of str) {
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }

        out += shift(letter, key);
    }
    output.value = out;
}

function shift(letter, key) {
    return String.fromCharCode(((letter.charCodeAt(0) - 65 + key) % 26) + 65);
}

inputBox.addEventListener("input", (e) => {
    ceasarCipher(inputBox, outputBox, threeLettersBack);
    sessionStorage.setItem("inputText", inputBox.value);
});

outputBox.addEventListener("input", (e) => {
    ceasarCipher(outputBox, inputBox, threeLettersForward);
    sessionStorage.setItem("inputText", inputBox.value);
});

if (sessionStorage.getItem("inputText") != null) {
    inputBox.value = sessionStorage.getItem("inputText");
}
