<?php

class ProductsView extends Products
{

  public function showProducts()
  {
    $results = $this->getProducts();
    header("Content-Type: JSON");
    echo json_encode($results,JSON_PRETTY_PRINT);
  }

}