<?php

class TypesView extends TypesModel
{

  public function showTypes()
  {
    $results = $this->getTypes();
    header("Content-Type: JSON");
    echo json_encode($results,JSON_PRETTY_PRINT);
  }

}