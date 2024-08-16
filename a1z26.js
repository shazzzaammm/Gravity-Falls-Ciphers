const inputBox = document.getElementById("input-text");
const outputBox = document.getElementById("output-text");

function a1z26() {
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

inputBox.addEventListener("input", (e) => {
    a1z26();
});

a1z26();
