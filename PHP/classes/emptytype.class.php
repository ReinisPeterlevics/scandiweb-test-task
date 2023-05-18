<?php

require_once "product.abstract.php";

class EmptyType extends Product {
  public function validate($data){
    return true;
  }
}