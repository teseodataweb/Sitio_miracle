<?php
/**
 * Procesador de Formularios - Concretos Miracle
 *
 * Este archivo procesa los formularios de contacto y cotización del sitio web.
 * Configurar el email de destino antes de usar en producción.
 */

// Configuración
$config = [
    'to_email' => 'info@concretosmiracle.com',
    'from_email' => 'noreply@concretosmiracle.com',
    'from_name' => 'Sitio Web Concretos Miracle',
    'success_redirect' => '../contact.html?status=success',
    'error_redirect' => '../contact.html?status=error'
];

// Prevenir acceso directo sin POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../index.html');
    exit;
}

// Función para limpiar datos de entrada
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Función para validar email
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Detectar tipo de formulario
$form_type = isset($_POST['form_type']) ? sanitize_input($_POST['form_type']) : 'contact';

// Procesar según el tipo de formulario
switch ($form_type) {
    case 'quote':
        // Formulario de cotización (formulario principal de contact.html)
        $result = process_quote_form();
        break;
    case 'sidebar':
        // Formulario del sidebar
        $result = process_sidebar_form();
        break;
    case 'newsletter':
        // Formulario de newsletter
        $result = process_newsletter_form();
        break;
    default:
        // Formulario de contacto genérico
        $result = process_contact_form();
}

// Redirigir según resultado
if ($result['success']) {
    header('Location: ' . $config['success_redirect']);
} else {
    header('Location: ' . $config['error_redirect'] . '&message=' . urlencode($result['message']));
}
exit;

/**
 * Procesa el formulario de cotización
 */
function process_quote_form() {
    global $config;

    // Campos requeridos
    $required = ['name', 'phone_number', 'email', 'concrete_type', 'quantity', 'location', 'pour_date'];

    // Validar campos requeridos
    foreach ($required as $field) {
        if (empty($_POST[$field])) {
            return ['success' => false, 'message' => "El campo {$field} es requerido"];
        }
    }

    // Obtener y sanitizar datos
    $name = sanitize_input($_POST['name']);
    $company = isset($_POST['company']) ? sanitize_input($_POST['company']) : 'No especificada';
    $phone = sanitize_input($_POST['phone_number']);
    $email = sanitize_input($_POST['email']);
    $concrete_type = sanitize_input($_POST['concrete_type']);
    $quantity = sanitize_input($_POST['quantity']);
    $location = sanitize_input($_POST['location']);
    $pour_date = sanitize_input($_POST['pour_date']);
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : 'Sin comentarios adicionales';

    // Validar email
    if (!is_valid_email($email)) {
        return ['success' => false, 'message' => 'El correo electrónico no es válido'];
    }

    // Construir mensaje de email
    $subject = "Nueva Solicitud de Cotización - {$name}";

    $email_body = "
    ========================================
    NUEVA SOLICITUD DE COTIZACIÓN
    ========================================

    DATOS DEL CLIENTE
    -----------------
    Nombre: {$name}
    Empresa: {$company}
    Teléfono/WhatsApp: {$phone}
    Correo: {$email}

    DETALLES DEL PEDIDO
    -------------------
    Tipo de concreto: {$concrete_type}
    Cantidad estimada: {$quantity} m³
    Ubicación de obra: {$location}
    Fecha de vaciado: {$pour_date}

    COMENTARIOS ADICIONALES
    -----------------------
    {$message}

    ========================================
    Enviado desde: Sitio Web Concretos Miracle
    Fecha: " . date('d/m/Y H:i:s') . "
    IP: " . $_SERVER['REMOTE_ADDR'] . "
    ========================================
    ";

    // Enviar email
    return send_email($config['to_email'], $subject, $email_body, $email);
}

/**
 * Procesa el formulario del sidebar
 */
function process_sidebar_form() {
    global $config;

    // Validar campos requeridos
    if (empty($_POST['name']) || empty($_POST['email'])) {
        return ['success' => false, 'message' => 'Nombre y correo son requeridos'];
    }

    $name = sanitize_input($_POST['name']);
    $email = sanitize_input($_POST['email']);
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : 'Sin mensaje';

    if (!is_valid_email($email)) {
        return ['success' => false, 'message' => 'El correo electrónico no es válido'];
    }

    $subject = "Nuevo Mensaje de Contacto Rápido - {$name}";

    $email_body = "
    ========================================
    MENSAJE DE CONTACTO RÁPIDO
    ========================================

    Nombre: {$name}
    Correo: {$email}

    Mensaje:
    {$message}

    ========================================
    Enviado desde: Sidebar del Sitio Web
    Fecha: " . date('d/m/Y H:i:s') . "
    ========================================
    ";

    return send_email($config['to_email'], $subject, $email_body, $email);
}

/**
 * Procesa el formulario de newsletter
 */
function process_newsletter_form() {
    global $config;

    if (empty($_POST['email'])) {
        return ['success' => false, 'message' => 'El correo es requerido'];
    }

    $email = sanitize_input($_POST['email']);

    if (!is_valid_email($email)) {
        return ['success' => false, 'message' => 'El correo electrónico no es válido'];
    }

    $subject = "Nueva Suscripción al Newsletter";

    $email_body = "
    ========================================
    NUEVA SUSCRIPCIÓN AL NEWSLETTER
    ========================================

    Correo: {$email}

    Fecha: " . date('d/m/Y H:i:s') . "
    ========================================
    ";

    return send_email($config['to_email'], $subject, $email_body, $email);
}

/**
 * Procesa formulario de contacto genérico
 */
function process_contact_form() {
    global $config;

    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : 'No especificado';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $phone = isset($_POST['phone_number']) ? sanitize_input($_POST['phone_number']) : 'No especificado';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : 'Sin mensaje';

    if (empty($email) || !is_valid_email($email)) {
        return ['success' => false, 'message' => 'El correo electrónico no es válido'];
    }

    $subject = "Nuevo Mensaje de Contacto - {$name}";

    $email_body = "
    ========================================
    MENSAJE DE CONTACTO
    ========================================

    Nombre: {$name}
    Correo: {$email}
    Teléfono: {$phone}

    Mensaje:
    {$message}

    ========================================
    Fecha: " . date('d/m/Y H:i:s') . "
    ========================================
    ";

    return send_email($config['to_email'], $subject, $email_body, $email);
}

/**
 * Envía el email
 */
function send_email($to, $subject, $body, $reply_to) {
    global $config;

    $headers = [
        'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
        'Reply-To: ' . $reply_to,
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=UTF-8'
    ];

    $headers_string = implode("\r\n", $headers);

    // Intentar enviar el email
    $sent = @mail($to, $subject, $body, $headers_string);

    if ($sent) {
        return ['success' => true, 'message' => 'Mensaje enviado correctamente'];
    } else {
        // Log del error para debugging
        error_log("Error al enviar email a {$to} - Asunto: {$subject}");
        return ['success' => false, 'message' => 'Error al enviar el mensaje. Por favor intente nuevamente.'];
    }
}
?>
