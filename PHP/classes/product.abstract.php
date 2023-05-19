<?php

require_once "productsview.class.php";

abstract class Product
{
  public $type;

  public function __construct($type)
  {
    $this->type = $type;
  }

  public function isSkuValid($sku, $errors)
  {
    if ($sku === null || trim($sku) === "") {
      $errors["sku"] = "Please, enter the SKU!";
      return $errors;
    }
    if (strlen($sku) > 32) {
      $errors["sku"] = "The entered SKU is too long!";
      return $errors;
    }
    $prodObj = new ProductsView();
    if (!$prodObj->isSkuUnique($sku)) {
      $errors["sku"] = "Please, enter a unique SKU!";
      return $errors;
    }
    return $errors;
  }

  public function isNameValid($name, $errors)
  {
    if ($name === null || trim($name) === "") {
      $errors["name"] = "Please, enter the name!";
      return $errors;
    }
    if (strlen($name) > 256) {
      $errors["name"] = "The entered name is too long!";
      return $errors;
    }
    return $errors;
  }

  public function isPriceValid($price, $errors)
  {
    if ($price === null || trim($price) === "") {
      $errors["price"] = "Please, enter the price!";
      return $errors;
    }
    if (strlen(substr(strrchr($price, "."), 1)) > 2 || $price < 0) {
      $errors["price"] = "Please, provide the price correctly!";
      return $errors;
    }
    return $errors;
  }

  public function isTypeValid($type, $errors)
  {
    if ($type === null || trim($type) === "" || $type === "DEFAULT") {
      $errors["productType"] = "Please, enter the type!";
      return $errors;
    }
    return $errors;
  }

  abstract public function validate($data);
}