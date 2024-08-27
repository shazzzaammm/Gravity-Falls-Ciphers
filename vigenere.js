const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");
const keyBox = document.getElementById("key-text");
let key = "KEY";

function vignereCipher(input, output, decode) {
    let str = input.value.toUpperCase();
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    let index = -1;

    for (const letter of str) {
        // YRJI XCCX YVTFKFCDMA MLYBEADIPC
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }
        index++;

        out += shift(letter, calculateKeyNumber(index, decode));
    }
    output.value = out;
}

// MEJMYJKXC DLC UIW XYKLIP LC GXHCHMLQ MLDS RRI IOC ROBR KRB QIRDMLQ XFO MLNIV SR RRI YVTFKFCD
function calculateKeyNumber(index, decode) {
    if (decode) return key.charCodeAt(index) - 65;
    else return 26 - (key.charCodeAt(index) - 65);
}

// MECCEP CLGPX RRI JOXROV ZI XFO GYVGSVEROH IOC
function shift(letter, key) {
    return String.fromCharCode(((letter.charCodeAt(0) + 65 - key) % 26) + 65);
}

function updateKey() {
    if (keyBox.value.length == 0) {
        keyBox.value = "KEY";
        keyBox.value = sessionStorage.getItem("vigenereKey") == null ? "KEY" : sessionStorage.getItem("vigenereKey");
    }
    // ORQEVC DLC UIW REQ YRJI EJZLYLIRSG AREPKGROVQ
    keyBox.value = keyBox.value.replace(/\s|[^A-Z^a-z]/g, "");
    keyBox.value = keyBox.value.toUpperCase();
    key = keyBox.value;
    while (key.length < inputBox.value.length) {
        key += keyBox.value.toUpperCase();
    }
    sessionStorage.setItem("vigenereKey", keyBox.value);
}

// OZCXX JSWRORCBW
inputBox.addEventListener("input", (e) => {
    updateKey();
    vignereCipher(inputBox, outputBox, true);
    sessionStorage.setItem("inputText", inputBox.value);
});

outputBox.addEventListener("input", (e) => {
    updateKey();
    vignereCipher(outputBox, inputBox, false);
    sessionStorage.setItem("inputText", inputBox.value);
});

keyBox.addEventListener("input", (e) => {
    updateKey();
});

if (sessionStorage.getItem("inputText") != null) {
    inputBox.value = sessionStorage.getItem("inputText");
    updateKey();
    vignereCipher(inputBox, outputBox, true);
}
