<?php

class ProductsView extends ProductsModel
{

  public function showProducts()
  {
    $results = $this->getProducts();
    header("Content-Type: JSON");
    echo json_encode($results,JSON_PRETTY_PRINT);
  }

  public function isSkuUnique($sku){
    $results = $this->checkSkuUnique($sku);
    return $results;
  }

}