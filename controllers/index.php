<?php

require_once '../database.php';

$stmt = $pdo->query("SELECT * FROM news WHERE date_posted LIKE '%April%'");

$newsItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo $dbName;
echo $dbPassword;


ob_start();
include '../views/index.view.php';
$content = ob_get_clean();

include '../layouts/layout.php';

