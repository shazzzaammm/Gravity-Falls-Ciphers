import { setup } from "./substitutionCipherModule.js";

const buttons = document.querySelectorAll(".substitution-button");
const inputArea = document.getElementById("input-area");
const outputText = document.getElementById("output-text");

setup(buttons, inputArea, outputText, "bill", ".webp")