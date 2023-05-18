<?php

require_once "product.abstract.php";

class DVD extends Product {
  public function validate($data){
    return true;
  }
}