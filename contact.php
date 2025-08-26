<?php

require_once 'database.php';

function validEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function validTelephone($telephone) {
    return preg_match('/^[0-9]{7,15}$/', $telephone) === 1;
}

function showErrorArea(&$box, &$span) {
    $box = 'invalid';
    $span = 'visible';
}

function hideErrorArea(&$box, &$span) {
    $box = '';
    $span = '';
}


$nameBorder = '';
$companyBorder = '';
$emailBorder = '';
$telephoneBorder = '';
$messageBorder = '';

$invalidName = '';
$invalidCompany = '';
$invalidEmail = '';
$invalidTelephone = '';
$invalidMessage = '';

$errors = [];
$old = [];
$success = '';

$sql = "INSERT INTO contact (
            full_name, 
            company, 
            email_address, 
            telephone_number, 
            message, 
            receive_information
        ) VALUES (
            :name, 
            :company, 
            :email, 
            :telephone, 
            :message, 
            :marketing
        )";


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $company = trim($_POST['company'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telephone = trim($_POST['telephone'] ?? '');
    $message = trim($_POST['message'] ?? '');

    $old = $_POST;

    if ($name === '') {
        showErrorArea($nameBorder, $invalidName); 
        $errors['name'] = 'Name';
    } else {
        hideErrorArea($nameBorder, $invalidName);
    }

    if ($company != '') {
        if (strlen($company) < 2 || strlen($company) > 50 ) {
            showErrorArea($companyBorder, $invalidCompany);  
            $errors['company'] = 'Company';
        } else {
            hideErrorArea($companyBorder, $invalidCompany);
        }
    } 

    if ($email === '' || !validEmail($email)) {
        showErrorArea($emailBorder, $invalidEmail); 
        $errors['email'] = 'Email';
    } else {
        hideErrorArea($emailBorder, $invalidEmail);
    }

    if ($telephone === '' || !validTelephone($telephone)) { 
        showErrorArea($telephoneBorder, $invalidTelephone); 
        $errors['telephone'] = 'Telephone';
    } else {
        hideErrorArea($telephoneBorder, $invalidTelephone);
    }

    if ($message === '' || strlen($message) < 20 || strlen($message) > 1000) { 
        showErrorArea($messageBorder, $invalidMessage); 
        $errors['message'] = 'Message';
    } else {
        hideErrorArea($messageBorder, $invalidMessage);
    }

    $marketing = !empty($_POST['marketing']) ? 1 : 0;

    if (empty($errors)) {
        
        try {
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':name' => $name,
                ':company' => $company,
                ':email' => $email,
                ':telephone' => $telephone,
                ':message' => $message,
                ':marketing' => $marketing
            ]);
            

            $success = "Message submitted successfully!";
            $old = [];
        
        } catch (PDOException $e) {
            $errors['db'] = "Database error: " . htmlspecialchars($e->getMessage());
        }
    }
}

ob_start();
include 'views/contact.view.php';
$content = ob_get_clean();

include 'layouts/layout.php';
include 'views/partials/contactscripts.php';


