function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (username === "" || password === "") {
        error.textContent = "Both fields are required!";
        return false;
    }

    if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters!";
        return false;
    }

    error.textContent = "Login successful!";
    error.style.color = "green";
    return false; // prevent actual submission for demo
}
