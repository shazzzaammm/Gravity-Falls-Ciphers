const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

function atbashCipher(input, output) {
    let str = input.value.toUpperCase();
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    for (const letter of str) {
        // LMOB VMXLWV/WVXLWV ZOKSZYVGRXZO XSZIZXGVIH
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }

        // IVEVIHV EZOFV RM ZOKSZYVG
        out += String.fromCharCode(90 - letter.charCodeAt(0) + 65);
    }
    output.value = out;
}

// VEVMG ORHGVMVIH
inputBox.addEventListener("input", (e) => {
    atbashCipher(inputBox, outputBox);
    sessionStorage.setItem("inputText", inputBox.value);
});

outputBox.addEventListener("input", (e) => {
    atbashCipher(outputBox, inputBox);
    sessionStorage.setItem("inputText", inputBox.value);
});

if (sessionStorage.getItem("inputText") != null) {
    inputBox.value = sessionStorage.getItem("inputText");
    atbashCipher(inputBox, outputBox);
}
