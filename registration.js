document.addEventListener('DOMContentLoaded', () => {
    const userName = document.getElementById("userName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    userName.addEventListener('input', validateUserName);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validateConfirmPassword);

    function validateUserName() {
        const userPattern = /^[a-zA-Z][a-zA-Z0-9]{2,20}$/;
        const userNameError = document.getElementById("usernameError");
        if (!userName.value.match(userPattern)) {
            userNameError.textContent = "Username must start with a letter and be between 3 and 20 characters.";
            return false;
        } else {
            userNameError.textContent = "";
            return true;
        }
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const passwordError = document.getElementById("passwordError");
        if (!password.value.match(passwordPattern)) {
            passwordError.textContent = "Password must be 8-15 characters long, with an uppercase letter, a number, and a special character.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    function validateConfirmPassword() {
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            return false;
        } else {
            confirmPasswordError.textContent = "";
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById("emailError");
        if (!email.value.match(emailPattern)) {
            emailError.textContent = "Please enter a valid email address.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validateForm(event) {
        const isUserNameValid = validateUserName();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isEmailValid = validateEmail();

        if (isUserNameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid) {
            alert("Page Submitted Successfully!");
            return true;
        }
        event.preventDefault();
        return false;
    }
});
