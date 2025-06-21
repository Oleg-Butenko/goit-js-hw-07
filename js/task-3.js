const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")
input.addEventListener("input", (event) => {
    const newName = event.target.value.trim();
    if (newName !== "") {
        output.textContent = newName;
    } else {
        output.textContent = "Anonymous"
    }
})
