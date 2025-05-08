document.addEventListener("DOMContentLoaded", function() {

    // Enable submit button when checkbox is checked
    const checkbox = document.getElementById("terms");
    const submitBtn = document.getElementById("btn-form");

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-disabled");
            submitBtn.classList.add("btn");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove("btn");
            submitBtn.classList.add("btn-disabled");
        };
    })



})