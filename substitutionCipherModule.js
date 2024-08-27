export function setup(buttons, inputArea, outputText, imageFolderName, imageExtension) {
    // Load saved value if it exists
    if (sessionStorage.getItem(`deciphered${imageFolderName}`)) {
        outputText.value = sessionStorage.getItem(`deciphered${imageFolderName}`);
        encode(inputArea, outputText, imageFolderName, imageExtension);
    }

    // Causes buttons to add correct symbols and letters on click
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            const letter = getButtonCharacter(e.target, imageExtension);
            outputText.value += letter.toUpperCase();
            inputArea.appendChild(e.target.children[0].cloneNode(true));
            sessionStorage.setItem(`deciphered${imageFolderName}`, outputText.value);
        });
    }

    // Backspace button removes a symbol and its letter
    document.getElementById("backspace-button").addEventListener("click", () => {
        if (inputArea.lastElementChild) {
            inputArea.lastElementChild.remove();
            outputText.value = outputText.value.slice(0, -1);
            sessionStorage.setItem(`deciphered${imageFolderName}`, outputText.value);
        }
    });

    // Space bar adds a space and empty space
    document.getElementById("space-button").addEventListener("click", () => {
        outputText.value += " ";
        inputArea.innerHTML += `<img src="images/characters/space.png" alt="space" class="" />`;
        sessionStorage.setItem(`deciphered${imageFolderName}`, outputText.value);
    });

    // Encode when input in the text area
    outputText.addEventListener("input", (e) => {
        encode(inputArea, outputText, imageFolderName, imageExtension);
        sessionStorage.setItem(`deciphered${imageFolderName}`, outputText.value);
    });
}

function getButtonCharacter(button, extension) {
    return button.innerHTML.charAt(button.innerHTML.indexOf(extension) - 1);
}

// Use letters in outputText to place symbols into inputArea
function encode(inputArea, outputText, imageFolderName, imageExtension) {
    inputArea.innerHTML = "";
    for (const letter of outputText.value) {
        if (/^[a-zA-Z]+$/.test(letter)) {
            inputArea.innerHTML += `<img src="images/characters/${imageFolderName}/${letter.toLowerCase()}${imageExtension}" alt="${letter.toLowerCase()}" class="" />`;
        } else if (letter == " ") {
            inputArea.innerHTML += `<img src="images/characters/space.png" alt="space" class="" />`;
        }
    }
}
