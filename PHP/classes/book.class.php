<?php

require_once "product.abstract.php";

class Book extends Product {
  public function validate($data){
    $errors=[];
    $errors["name"] = "Please, submit name!";
    $errors["sku"] = "Please, provide unique SKU!";
    header("Content-Type: application/json");
    http_response_code(422);
    echo json_encode($errors,JSON_PRETTY_PRINT);
    return false;
  }
}