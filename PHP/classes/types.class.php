<?php

class Types extends Dbh
{

  protected function getTypes()
  {
    $sql = "SELECT * FROM types";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute();

    $results = $stmt->fetchAll();
    return $results;
  }

}