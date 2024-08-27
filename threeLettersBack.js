const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

// FDHVDU NHBV
let threeLettersForward = 3;
let threeLettersBack = 23;

function ceasarCipher(input, output, key) {
    let str = input.value.toUpperCase();
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    for (const letter of str) {
        // RQOB FKHFN DOSKDEHWLFDO FKDUDFWHUV
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }

        out += shift(letter, key);
    }
    output.value = out;
}

// FDHVDU VKLIW OHWWHU EB WKH NHB
function shift(letter, key) {
    return String.fromCharCode(((letter.charCodeAt(0) - 65 + key) % 26) + 65);
}

// HYHQW OLVWHQHUV
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
    ceasarCipher(inputBox, outputBox, threeLettersBack);
}
