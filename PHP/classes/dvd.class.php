<?php

require_once "product.abstract.php";

class Dvd extends Product
{
  public function validate($data)
  {
    $errors = [];

    $errors = $this->isSkuValid($data["sku"], $errors);
    $errors = $this->isNameValid($data["name"], $errors);
    $errors = $this->isPriceValid($data["price"], $errors);
    $errors = $this->isTypeValid($data["productType"], $errors);
    $errors = $this->isSizeValid($data["size"], $errors);

    if (empty($errors)) {
      return true;
    }

    header("Content-Type: application/json");
    http_response_code(422);
    echo json_encode($errors, JSON_PRETTY_PRINT);
    return false;
  }

  private function isSizeValid($size, $errors)
  {
    if ($size === null || trim($size) === "") {
      $errors["size"] = "Please, enter the size!";
      return $errors;
    }
    if (strlen(substr(strrchr($size, "."), 1)) > 0 || $size < 0 || !is_numeric($size)) {
      $errors["size"] = "Please, provide the size correctly!";
      return $errors;
    }
    return $errors;
  }
}