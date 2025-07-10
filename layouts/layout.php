<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/icomoon.css" />
</head>
<body>
    <div class="overlay">
        <div class="mainwrap">
            
            <?php include '../views/partials/header.php'; ?>

            <main>
                <?= $content ?>
            </main>

            <?php include '../views/partials/footer.php'; ?>
            <?php include '../views/partials/popoutmenu.php'?>
            <?php include '../views/partials/cookiescontact.php'?>
        </div>
    </div>
    <?php include '../views/partials/scripts.php'?>
</body>
</html>

