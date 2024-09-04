const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

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

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === emailInput.value && user.password === passwordInput.value);

    if (emailInput.value && passwordInput.value) {
        event.preventDefault(); // Prevent form submission
        if (user) {
            alert("Login successful!");
            document.getElementById('email').value = "";
            document.getElementById('password').value = "";
        } else {
            alert("User does not exist or incorrect password.");
        }
    } else {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const signupConfirmPassword = document.getElementById('signupConfirmPassword');

    if (!signupEmail.value || !signupPassword.value || !signupConfirmPassword.value) {
        event.preventDefault();
        alert("Please fill in all fields.");
    } else if (signupPassword.value !== signupConfirmPassword.value) {
        event.preventDefault();
        alert("Passwords do not match.");
    } else {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === signupEmail.value);

        if (userExists) {
            alert("User already exists. Please login.");
        } else {
            users.push({ email: signupEmail.value, password: signupPassword.value });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Signup successful! Redirecting to login page...");
            document.getElementById('login').checked = true; // Switch to login tab
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
            signupForm.reset(); // Reset signup form
        }
    }
});

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

signupLink.onclick = () => {
    signupBtn.click();
    return false;
};