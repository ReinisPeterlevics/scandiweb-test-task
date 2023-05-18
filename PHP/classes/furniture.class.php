<?php

require_once "product.abstract.php";

class Furniture extends Product {
  public function validate($data){
    return true;
  }
}