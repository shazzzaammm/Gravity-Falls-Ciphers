const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

function atbashCipher() {
    let str = inputBox.value;
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    for (const letter of str) {
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }

        out += String.fromCharCode("Z".charCodeAt(0) - letter.charCodeAt(0) + 65);
    }
    outputBox.value = out;
}

inputBox.addEventListener("input", (e) => {
    inputBox.value = inputBox.value.toUpperCase();
    atbashCipher();
});
