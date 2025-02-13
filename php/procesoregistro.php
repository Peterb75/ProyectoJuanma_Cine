<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"] ?? "");
    $username = trim($_POST["username"] ?? "");
    $password = $_POST["password"] ?? "";
    $confirmPassword = $_POST["confirm-password"] ?? "";
    $errores = [];

    // Expresiones regulares
    $emailPattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
    $usernamePattern = "/^[a-zA-Z0-9_]{3,20}$/";
    $passPattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/";

    // Validación de correo electrónico
    if (!preg_match($emailPattern, $email)) {
        $errores[] = "El correo electrónico no es válido.";
    }

    // Validación de nombre de usuario
    if (!preg_match($usernamePattern, $username)) {
        $errores[] = "El usuario debe tener entre 3 y 20 caracteres, sin espacios.";
    }

    // Validación de contraseña
    if (!preg_match($passPattern, $password)) {
        $errores[] = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
    }

    // Verificación de confirmación de contraseña
    if ($password !== $confirmPassword) {
        $errores[] = "Las contraseñas no coinciden.";
    }

    // Si no hay errores, procesar el formulario
    if (empty($errores)) {
        header("Location: iniciolog.html");
        exit();
    } else {
        // Almacenar errores en la sesión
        $_SESSION["errores"] = $errores;
        // Redirigir de vuelta al formulario de registro
        header("Location: registro.html");
        exit();
    }
}
?>