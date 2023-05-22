<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS")
  exit();

include "includes/classAutoloader.inc.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
  $prodObj = new ProductsController();
  $prodObj->deleteProducts($data);
}