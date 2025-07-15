<?php

ob_start();
include '../views/index.view.php';
$content = ob_get_clean();

include '../layouts/layout.php';

