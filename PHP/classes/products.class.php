<?php

class Products extends Dbh
{

  protected function getProducts()
  {
    $sql = "SELECT * FROM products";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute();

    $results = $stmt->fetchAll();
    return $results;
  }

  protected function setProduct($product_SKU, $product_name, $product_price, $product_type_id, $product_size, $product_height, $product_width, $product_length, $product_weight)
  {
    $sql = "INSERT INTO products(product_SKU, product_name, product_price, product_type_id, product_size, product_height, product_width, product_length, product_weight) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute([$product_SKU, $product_name, $product_price, $product_type_id, $product_size, $product_height, $product_width, $product_length, $product_weight]);
  }

}