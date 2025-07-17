<?php

require_once '../database.php';

$stmt = $pdo->query("SELECT * FROM news" );

$newsItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

ob_start();
include '../views/index.view.php';
$content = ob_get_clean();

include '../layouts/layout.php';
include '../views/partials/indexscripts.php';


