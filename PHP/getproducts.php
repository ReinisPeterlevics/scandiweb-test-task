<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json");

include "includes/classAutoloader.inc.php";

$prodObj = new ProductsView();
$prodObj->showProducts();