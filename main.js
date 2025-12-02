let display = document.getElementById("display");

// Append clicked value
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* -------------------------
   Keyboard Support Bonus
-------------------------- */
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ((key >= 0 && key <= 9) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }

    if (key === "Enter") calculate();
    if (key === "Backspace") deleteLast();
    if (key === "Escape") clearDisplay();
});