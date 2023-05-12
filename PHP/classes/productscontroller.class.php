<?php

class ProductsController extends Products
{

  public function addProduct($product_SKU, $product_name, $product_price, $product_type_id, $product_size, $product_height, $product_width, $product_length, $product_weight)
  {
    $this->setProduct($product_SKU, $product_name, $product_price, $product_type_id, $product_size, $product_height, $product_width, $product_length, $product_weight);
  }

}