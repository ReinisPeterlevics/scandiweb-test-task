<?php

class ProductsController extends ProductsModel
{

  public function addProduct($data)
  {
    $this->setProduct($data["sku"], $data["name"], $data["price"], $data["productType"], $data["size"], $data["height"], $data["width"], $data["length"], $data["weight"]);
  }

  public function deleteProducts($data)
  {
    foreach ($data as $product_id) {
      $this->deleteProduct($product_id);
    }
  }

}