<?php

header("Access-Control-Allow-Origin: *");

include "includes/classAutoloader.inc.php";

$typeObj = new TypesView();
$typeObj->showTypes();