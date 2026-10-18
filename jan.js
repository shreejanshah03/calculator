```javascript
let display = document.getElementById("display");

function addValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
            display.value = "Error";
            return;
        }

        display.value = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(Number(display.value))) {
            display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
}
```