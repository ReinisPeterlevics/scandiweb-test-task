<?php

header("Access-Control-Allow-Origin: *");

include "includes/classAutoloader.inc.php";

$prodObj = new ProductsController();
$prodObj->addProduct("BOR690217", "Cooking book", "10", "2", null,  null,  null,  null,  "1");
$prodObj->addProduct("BOR690217", "Chair", "35.5", "3", null,  "50",  "120", "50", null);
$prodObj->addProduct("BOR690217", "Concert", "29.99", "1", "4600",  null,  null,  null, null);