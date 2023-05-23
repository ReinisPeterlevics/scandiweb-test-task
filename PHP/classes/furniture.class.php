<?php

require_once "Product.abstract.php";

class Furniture extends Product
{
  public function validate($data)
  {
    $errors = [];

    $errors = $this->isSkuValid($data["sku"], $errors);
    $errors = $this->isNameValid($data["name"], $errors);
    $errors = $this->isPriceValid($data["price"], $errors);
    $errors = $this->isTypeValid($data["productType"], $errors);
    $errors = $this->isHeightValid($data["height"], $errors);
    $errors = $this->isWidthValid($data["width"], $errors);
    $errors = $this->isLengthValid($data["length"], $errors);

    if (empty($errors)) {
      return true;
    }

    header("Content-Type: application/json");
    http_response_code(422);
    echo json_encode($errors, JSON_PRETTY_PRINT);
    return false;
  }

  private function isHeightValid($height, $errors)
  {
    if ($height === null || trim($height) === "") {
      $errors["height"] = "Please, enter the height!";
      return $errors;
    }
    if (strlen(substr(strrchr($height, "."), 1)) > 0 || $height < 0 || !is_numeric($height) || strlen($height) > 10) {
      $errors["height"] = "Please, provide the height correctly!";
      return $errors;
    }
    return $errors;
  }

  private function isWidthValid($width, $errors)
  {
    if ($width === null || trim($width) === "") {
      $errors["width"] = "Please, enter the width!";
      return $errors;
    }
    if (strlen(substr(strrchr($width, "."), 1)) > 0 || $width < 0 || !is_numeric($width) || strlen($width) > 10) {
      $errors["width"] = "Please, provide the width correctly!";
      return $errors;
    }
    return $errors;
  }

  private function isLengthValid($length, $errors)
  {
    if ($length === null || trim($length) === "") {
      $errors["length"] = "Please, enter the length!";
      return $errors;
    }
    if (strlen(substr(strrchr($length, "."), 1)) > 0 || $length < 0 || !is_numeric($length) || strlen($length) > 10) {
      $errors["length"] = "Please, provide the length correctly!";
      return $errors;
    }
    return $errors;
  }
}