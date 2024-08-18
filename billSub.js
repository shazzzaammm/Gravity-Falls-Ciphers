const buttons = document.querySelectorAll(".substitution-button");
const inputArea = document.getElementById("input-area");
const outputText = document.getElementById("output-text");

function getButtonCharacter(button) {
    return button.innerHTML.charAt(button.innerHTML.indexOf(".png") - 1);
}

for (const button of buttons) {
    button.addEventListener("click", (e) => {
        const letter = getButtonCharacter(e.target);
        outputText.value += letter.toUpperCase();
        inputArea.appendChild(e.target.children[0].cloneNode(true));
    });
}

document.getElementById("backspace-button").addEventListener("click", () => {
    if (inputArea.lastElementChild) {
        inputArea.lastElementChild.remove();
        outputText.value = outputText.value.slice(0, -1);
    }
});

document.getElementById("space-button").addEventListener("click", () => {
    outputText.value += " ";
    inputArea.innerHTML += `<img src="images/characters/space.png" alt="" class="" />`
});