
const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const elements = event.target.elements;
    if (elements.email.value === "" || elements.password.value === "") {
        alert('All form fields must be filled in')
    } else {
        const info = {
            email: elements.email.value.trim(),
            password: elements.password.value.trim()
        }
        console.log(info);
        event.target.reset();
    }
    
})