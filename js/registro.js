document.getElementById("registerForm").addEventListener("submit", function (event) {
    let valid = true;

    // Obtener valores
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const terms = document.getElementById("terms");

    // Expresiones regulares
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;

    // Limpiar mensajes de error
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

    // Validación de correo electrónico
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById("error-email").textContent = "Ingrese un correo válido.";
        valid = false;
    }

    // Validación de usuario (sin espacios, mínimo 3 caracteres)
    if (!usernamePattern.test(username.value.trim())) {
        document.getElementById("error-username").textContent = "Usuario debe tener entre 3 y 20 caracteres, sin espacios.";
        valid = false;
    }

    // Validación de contraseña
    if (!passPattern.test(password.value)) {
        document.getElementById("error-password").textContent = 
        "Debe tener al menos 9 caracteres, una mayúscula, un número y un carácter especial (@$!%*?&).";
        valid = false;
    }

    // Verificación de confirmación de contraseña
    if (password.value !== confirmPassword.value) {
        document.getElementById("error-confirm-password").textContent = "Las contraseñas no coinciden.";
        valid = false;
    }

    // Verificar términos y condiciones
    if (!terms.checked) {
        alert("Debes aceptar los términos y condiciones.");
        valid = false;
    }

    // Si hay errores, se detiene el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});