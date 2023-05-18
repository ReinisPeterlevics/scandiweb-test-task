<?php

abstract class Product {
  public $type;
  public function __construct($type){
    $this->type = $type;
  }
  abstract public function validate($data);
}