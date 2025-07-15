<?php
// Load Composer autoload
require_once realpath(__DIR__ . "/vendor/autoload.php");

use Dotenv\Dotenv;

// Load .env file
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Create PDO connection using your custom .env keys
try {
    $dsn = "mysql:host={$_ENV['MySQL_DB_HOST']};dbname={$_ENV['MySQL_DB_NAME']};port={$_ENV['MySQL_DB_PORT']};charset=utf8mb4";

    $pdo = new PDO($dsn, $_ENV['MySQL_DB_USER_NAME'], $_ENV['MySQL_DB_PASSWORD']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Optional test
    // echo "Connected to database successfully.";
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
