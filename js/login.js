document.getElementById("loginForm").addEventListener("submit", function (event) {
    let valid = true;

    // Validación de correo electrónico
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("error-email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Ingrese un correo electrónico válido.";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }

    // Validación de contraseña
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("error-password");
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;

    if (!passPattern.test(password.value)) {
        errorPassword.textContent = 
        "Debe tener al menos 9 caracteres, una mayúscula, un número y un carácter especial (@$!%*?&).";
        valid = false;
    } else {
        errorPassword.textContent = "";
    }

    // Si hay errores, se detiene el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});