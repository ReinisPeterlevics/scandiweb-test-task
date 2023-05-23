<?php

require_once "Product.abstract.php";

class EmptyType extends Product
{
  public function validate($data)
  {
    $errors = [];

    $errors = $this->isSkuValid($data["sku"], $errors);
    $errors = $this->isNameValid($data["name"], $errors);
    $errors = $this->isPriceValid($data["price"], $errors);
    $errors = $this->isTypeValid($data["productType"], $errors);

    if (empty($errors)) {
      return true;
    }

    header("Content-Type: application/json");
    http_response_code(422);
    echo json_encode($errors, JSON_PRETTY_PRINT);
    return false;
  }
}