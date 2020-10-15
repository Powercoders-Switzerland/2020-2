const email = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("email: ", email.value);
})

