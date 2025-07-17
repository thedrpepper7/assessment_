<?php

require_once '../database.php'; // Make sure path is correct

// Get JSON input and decode it
$json = file_get_contents('php://input');
$data = json_decode($json, true);

$name = trim($data['name'] ?? '');
$company = trim($data['company'] ?? '');
$email = trim($data['email'] ?? '');
$telephone = trim($data['telephone'] ?? '');
$message = trim($data['message'] ?? '');
$marketing = !empty($data['marketing']) ? 1 : 0;  // 1 or 0 for boolean field

if (empty($name) || empty($email) || empty($telephone) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Required fields missing']);
    exit;
}

// Prepare SQL
$sql = "INSERT INTO contact (full_name, company, email_address, telephone_number, message, receive_information) 
        VALUES (:name, :company, :email, :telephone, :message, :marketing)";

$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([
        ':name' => $name,
        ':company' => $company,
        ':email' => $email,
        ':telephone' => $telephone,
        ':message' => $message,
        ':marketing' => $marketing,
    ]);
    // Success response
    echo json_encode(['success' => 'Contact saved successfully']);
} catch (PDOException $e) {
    // Error response
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}
