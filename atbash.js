const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

function atbashCipher(input, output) {
    let str = input.value.toUpperCase();
    let out = "";
    let alphaRegex = /^[a-zA-Z]+$/;
    for (const letter of str) {
        if (!alphaRegex.test(letter)) {
            out += letter;
            continue;
        }

        out += String.fromCharCode(90 - letter.charCodeAt(0) + 65);
    }
    output.value = out;
}

inputBox.addEventListener("input", (e) => {
    atbashCipher(inputBox, outputBox);
});

outputBox.addEventListener("input", (e) => {
    atbashCipher(outputBox, inputBox);
});
