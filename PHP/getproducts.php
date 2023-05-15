<?php

header("Access-Control-Allow-Origin: *");

include "includes/classAutoloader.inc.php";

$prodObj = new ProductsView();
$prodObj->showProducts();