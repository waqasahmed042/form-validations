const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Dummy credentials
    const userEmail = "test@gmail.com";
    const userPassword = "test1122$";

    if (emailInput.value) {
        event.preventDefault(); // Prevent form submission
        if (emailInput.value === userEmail && passwordInput.value === userPassword) {
            alert("Login successful!");
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
        } else if (emailInput.value != userEmail && passwordInput.value === userPassword) {
            alert("Invalid Email");
        } else if (emailInput.value === userEmail && passwordInput.value != userPassword) {
            alert("Invalid Password");
        } else {
            event.preventDefault(); // Prevent form submission
            alert("Invalid email or password.");
        }
    }
});

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
