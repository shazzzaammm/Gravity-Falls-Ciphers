const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

function decodeA1Z26() {
    let str = inputBox.value;
    let out = "";

    // 3-15-14-20-9-14-21-5 21-14-20-9-12 15-21-20 15-6 14-21-13-2-5-18-19
    while (!isNaN(parseInt(str))) {
        // 16-1-18-19-5 9-14-20 1-19 1 16-15-19-9-20-9-22-5 14-21-13-2-5-18
        let num = parseInt(str);
        num = num >= 0 ? (num = num) : (num *= -1);

        // 4-5-3-15-4-5 14-21-13-2-5-18 20-15 3-15-18-18-5-19-16-15-14-4-9-14-7 12-5-20-20-5-18
        let letter = String.fromCharCode(num + 64);
        out += letter;

        // 21-16-4-1-20-5 20-8-5 19-20-18-9-14-7 20-15 3-15-14-20-9-14-21-5 20-8-5 12-15-15-16 3-15-18-18-5-3-20-12-25
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
        // 16-12-5-1-19-5 19-20-15-16 18-5-1-4-9-14-7 
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

// 5-22-5-14-20 12-9-19-20-5-14-5-18-19

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
