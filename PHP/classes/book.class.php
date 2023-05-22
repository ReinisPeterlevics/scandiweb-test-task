<?php

require_once "product.abstract.php";

class Book extends Product
{
  public function validate($data)
  {
    $errors = [];

    $errors = $this->isSkuValid($data["sku"], $errors);
    $errors = $this->isNameValid($data["name"], $errors);
    $errors = $this->isPriceValid($data["price"], $errors);
    $errors = $this->isTypeValid($data["productType"], $errors);
    $errors = $this->isWeightValid($data["weight"], $errors);

    if (empty($errors)) {
      return true;
    }

    header("Content-Type: application/json");
    http_response_code(422);
    echo json_encode($errors, JSON_PRETTY_PRINT);
    return false;
  }

  private function isWeightValid($weight, $errors)
  {
    if ($weight === null || trim($weight) === "") {
      $errors["weight"] = "Please, enter the weight!";
      return $errors;
    }
    if (strlen(substr(strrchr($weight, "."), 1)) > 1 || $weight < 0 || !is_numeric($weight)) {
      $errors["weight"] = "Please, provide the weight correctly!";
      return $errors;
    }
    return $errors;
  }
}