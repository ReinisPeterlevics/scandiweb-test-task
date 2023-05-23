<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS")
  exit();

include "includes/classAutoloader.inc.php";

$data = json_decode(file_get_contents("php://input"), true);

$prodTypes = [
  1 => "Dvd",
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