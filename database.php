<?php

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$dbHost     = $_ENV['MySQL_DB_HOST'];
$dbPort     = $_ENV['MySQL_DB_PORT'];
$dbUser     = $_ENV['MySQL_DB_USER_NAME'];
$dbPassword = $_ENV['MySQL_DB_PASSWORD'];
$dbName     = $_ENV['MySQL_DB_NAME'];

try {
    $dsn = "mysql:host=$dbHost;port=$dbPort;dbname=$dbName;charset=utf8mb4";
    $pdo = new PDO($dsn, $dbUser, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
