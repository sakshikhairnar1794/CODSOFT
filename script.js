let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Button Click Handling
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Keyboard Input Handling
document.addEventListener('keydown', (e) => {
    let key = e.key;

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
        string += key;
    } else if (key === 'Enter') {
        e.preventDefault(); // prevent form submit if inside a form
        try {
            string = eval(string);
        } catch {
            string = "Error";
        }
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
    } else if (key === 'Escape') {
        string = "";
    }

    input.value = string;
});

// Common function to handle both keyboard and button inputs
function handleInput(value) {
    if (value == '=') {
        try {
            string = eval(string);
        } catch {
            string = "Error";
        }
    } else if (value == 'AC') {
        string = "";
    } else if (value == 'DEL') {
        string = string.slice(0, -1);
    } else {
        string += value;
    }
    input.value = string;
}
