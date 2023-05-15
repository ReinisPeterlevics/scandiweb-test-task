<?php

class TypesView extends Types
{

  public function showTypes()
  {
    $results = $this->getTypes();
    // foreach ($results as $result) {
    //   echo $result["type_id"] . " " . $result["type_name"] . "<br>";
    // }
    header("Content-Type: JSON");
    echo json_encode($results,JSON_PRETTY_PRINT);
  }

}