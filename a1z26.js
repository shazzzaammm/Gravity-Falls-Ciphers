const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

function decodeA1Z26() {
    let str = inputBox.value;
    let out = "";

    while (!isNaN(parseInt(str))) {
        let num = parseInt(str);
        num = num >= 0 ? (num = num) : (num *= -1);
        let letter = String.fromCharCode(num + 64);
        out += letter;
        str = str.replace(num.toString(), "");
        if (str.charAt(0) == " ") {
            out += " ";
            str = str.replace(" ", "");
        } else {
            str = str.replace("-", "");
        }
    }

    outputBox.value = out;
}

function encodeA1Z26() {
    let str = outputBox.value.toUpperCase();
    let out = "";

    for (const letter of str) {
        // dont look at this part
        if (/\s/.test(letter)) {
            out = out.slice(0, -1);
            out += letter;
        } else {
            out += letter.charCodeAt(0) - 64;
            out += "-";
        }
    }
    inputBox.value = out;
}

inputBox.addEventListener("input", (e) => {
    decodeA1Z26();
    sessionStorage.setItem("inputText", inputBox.value);
});

outputBox.addEventListener("input", (e) => {
    encodeA1Z26();
    sessionStorage.setItem("inputText", inputBox.value);
});

if (sessionStorage.getItem("inputText") != null) {
    inputBox.value = sessionStorage.getItem("inputText");
    decodeA1Z26();
}
