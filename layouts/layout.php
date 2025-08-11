<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../css/swiper-bundle.min.css" />
    <link rel="stylesheet" href="../css/slick.css" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/icomoon.css" />
</head>
<body>
    <?php include 'views/partials/popoutmenu.php'?>
    
    <div class="overlay"></div>
    <div id="mainwrap">
            
        <?php include 'views/partials/header.php'; ?>

        <main>
            <?= $content ?>
        </main>

        <?php include 'views/partials/footer.php'; ?>
        
        
    </div>
    <?php include 'views/partials/cookiescontact.php'?>
    <?php include 'views/partials/universalscripts.php'?>
    
</body>
</html>

