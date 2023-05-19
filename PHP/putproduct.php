<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

if($_SERVER["REQUEST_METHOD"] == "OPTIONS") exit();

include "includes/classAutoloader.inc.php";

// $json = '{"sku":"BOR111222","name":"How to book","price":"12","productType":"1","size":"","height":"NULL","width":"","length":"","weight":""}';
// $data = json_decode($json,true);

$data = json_decode(file_get_contents("php://input"),true);

$prodTypes = [
  1 => "DVD",
  2 => "Book",
  3 => "Furniture",
  null => "EmptyType"
];
$type = $data["productType"];
$prodClass = $prodTypes[$type];
$prodValidator = new $prodClass($type);
$isValid = $prodValidator->validate($data);

if ($isValid) {
  $prodObj = new ProductsController();
  $prodObj->addProduct($data);
}
