let text = document.getElementById("colorText");

let input = document.getElementById("colorInput");

input.addEventListener('input', updateValue);

function updateValue(event) {
    text.style.color = event.target.value;
}