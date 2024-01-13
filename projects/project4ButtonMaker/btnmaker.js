let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");

let customButtonElement = document.getElementById("customButton");

function applyButton() {
    let valueOfBgColorInputElement = bgColorInputElement.value;
    let valueOfFontColorInputElement = fontColorInputElement.value;
    let valueOfFontSizeInputElement = fontSizeInputElement.value;
    let valueOfFontWeightInputElement = fontWeightInputElement.value;
    let valueOfPaddingInputElement = paddingInputElement.value;
    let valueOfBorderRadiusInputElement = borderRadiusInputElement.value;

    customButtonElement.style.backgroundColor = valueOfBgColorInputElement;
    customButtonElement.style.color = valueOfFontColorInputElement;
    customButtonElement.style.fontSize = valueOfFontSizeInputElement;
    customButtonElement.style.fontWeight = valueOfFontWeightInputElement;
    customButtonElement.style.padding = valueOfPaddingInputElement;
    customButtonElement.style.borderRadius = valueOfBorderRadiusInputElement;
}