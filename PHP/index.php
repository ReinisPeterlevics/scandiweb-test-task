<?php
include "includes/classAutoloader.inc.php";

// $typeObj = new TypesView();
// $typeObj->showTypes();

// $prodObj = new ProductsView();
// $prodObj->showProducts();

$prodObj = new ProductsController();
$prodObj->addProduct("BOR890327", "Manual", "16.5", "2", null,  null,  null,  null,  "0.8");

?>