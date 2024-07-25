function toggleMenu() {
    const menu = document.querySelector('.menu');
    const search = document.querySelector('.search');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    search.classList.toggle('active');
    hamburger.classList.toggle('active');
}


function validateSignupForm() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    let valid = true;

    // Reset previous error messages
    resetError(username);
    resetError(email);
    resetError(password);
    resetError(confirmPassword);

    if (username.value.length < 5) {
        setError(username, "Username must be at least 5 characters long.");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        setError(email, "Please enter a valid email address.");
        valid = false;
    }

    if (password.value.length < 8) {
        setError(password, "Password must be at least 8 characters long.");
        valid = false;
    }

    if (password.value !== confirmPassword.value) {
        setError(confirmPassword, "Passwords do not match.");
        valid = false;
    }

    if (valid) {
        alert("Signup successful!");
    }
}

function validateLoginForm() {
    const email = document.getElementById('login-email');
    const password = document.getElementById('login-password');

    let valid = true;

    // Reset previous error messages
    resetError(email);
    resetError(password);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        setError(email, "Please enter a valid email address.");
        valid = false;
    }

    if (password.value.length < 8) {
        setError(password, "Password must be at least 8 characters long.");
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
    }
}

function setError(element, message) {
    element.style.borderColor = "red";
    const errorElement = document.createElement('div');
    errorElement.className = "error";
    errorElement.style.color = "red";
    errorElement.innerText = message;
    element.parentNode.insertBefore(errorElement, element.nextSibling);
}

function resetError(element) {
    element.style.borderColor = "";
    const errorElements = element.parentNode.querySelectorAll('.error');
    errorElements.forEach(error => error.remove());
}

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value) {
            this.style.borderColor = "green";
            resetError(this);
        } else {
            this.style.borderColor = "red";
        }
    });
});
