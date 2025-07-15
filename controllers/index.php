<?php

require_once '../database.php';

$stmt = $pdo->query("SELECT * FROM news" );

$newsItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

$id = [];
$imageLink = [];
$tagLink = [];
$newsHeader = [];
$newsContent = [];
$readMoreLink = [];
$author = [];
$datePosted = [];

foreach ($newsItems as $news) {
    $id[] = $news['id'];
    $imageLink[] = $news['image_link'];
    $tagLink[] = $news['tag_link'];
    $newsHeader[] = $news['news_header'];
    $newsContent[] = $news['news_content'];
    $readMoreLink[] = $news['read_more_link'];
    $author[] = $news['author'];
    $datePosted[] = $news['date_posted'];
}


// echo $imageLink[4];
// echo $newsContent[3];

ob_start();
include '../views/index.view.php';
$content = ob_get_clean();

include '../layouts/layout.php';


