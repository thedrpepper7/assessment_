<?php

ob_start();
include '../views/contact.view.php';
$content = ob_get_clean();

include '../layouts/layout.php';