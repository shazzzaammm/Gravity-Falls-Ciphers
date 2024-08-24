export function setup(buttons, inputArea, outputText, imageFolderName, imageExtension) {
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            const letter = getButtonCharacter(e.target, imageExtension);
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
        inputArea.innerHTML += `<img src="images/characters/space.png" alt="space" class="" />`;
    });

    outputText.addEventListener("input", (e) => {
        inputArea.innerHTML = "";
        for (const letter of outputText.value) {
            if (/^[a-zA-Z]+$/.test(letter)) {
                inputArea.innerHTML += `<img src="images/characters/${imageFolderName}/${letter.toLowerCase()}${imageExtension}" alt="${letter.toLowerCase()}" class="" />`;
            } else if (letter == " ") {
                inputArea.innerHTML += `<img src="images/characters/space.png" alt="space" class="" />`;
            }
        }
    });
}

function getButtonCharacter(button, extension) {
    return button.innerHTML.charAt(button.innerHTML.indexOf(extension) - 1);
}
