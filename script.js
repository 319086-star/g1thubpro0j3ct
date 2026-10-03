const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (button.id === "clear") {
            display.value = "";
            return;
        }

        if (button.id === "equals") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "yeah im not doing that";
            }
            return;
        }

        display.value += button.textContent;
    });
});