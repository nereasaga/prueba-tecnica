document.addEventListener("DOMContentLoaded", function() {
    
    // Display welcome message when login is successful, hide login form, and show incorrect message if login fails
    let divWelcome = document.getElementById("welcome");
    let divIncorrect = document.getElementById("incorrect");
    let loginForm = document.getElementById("login-form");
    let usernameInp = document.getElementById("username");
    let passInp = document.getElementById("password");
    let loginBtn = document.getElementById("btn-login");

    loginBtn.addEventListener("click", function(event){
        event.preventDefault();
        let username = usernameInp.value;
        let pass = passInp.value;

        if (username === "nerea" && pass === "123") {
            divWelcome.classList.remove("hidden");
            divWelcome.classList.add("login-form");
            loginForm.classList.add("hidden");

        } else {
            divIncorrect.classList.remove("hidden");
            divIncorrect.classList.add("login-form");
        };
    });


    // Show password when clicking eye icon
    const eyeIcon = document.getElementById("eye-icon");

    eyeIcon.addEventListener("click", function() {
        if (passInp.type === "password") {
            passInp.type = "text";
            eyeIcon.innerHTML = "Ocultar constraseña 🔒";
        } else {
            passInp.type = "password";
            eyeIcon.innerHTML = "Mostrar constraseña 👁️";
        }
    })


});
