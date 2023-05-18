<?php

class ProductsController extends Products
{

  public function addProduct($data)
  {
    $this->setProduct($data["sku"], $data["name"], $data["price"], $data["productType"], $data["size"], $data["height"], $data["width"], $data["length"], $data["weight"]);
  }

}