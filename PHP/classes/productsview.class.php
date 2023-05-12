<?php

class ProductsView extends Products
{

  public function showProducts()
  {
    $results = $this->getProducts();
    foreach ($results as $result) {
      echo $result["product_SKU"] . " " . $result["product_name"] . "<br>";
    }
  }

}