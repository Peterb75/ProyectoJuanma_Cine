<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];
    $errores = [];

    // Validación de correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El correo electrónico no es válido.";
    }

    // Validación de contraseña
    if (!preg_match("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/", $password)) {
        $errores[] = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
    }

    // Si no hay errores, se procesa el formulario
    if (empty($errores)) {
        header("Location: iniciolog.html");
        exit();
    } else {
        // Mostrar errores
        foreach ($errores as $error) {
            echo "<p style='color:red;'>$error</p>";
        }
    }
}
?>