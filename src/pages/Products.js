import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import ProductsList from "../components/ProductsList";

function ProductsPage() {
  const { products } = useLoaderData();

  return (
    <Suspense>
      <Await resolve={products}>
        {(loadedProducts) => (
          <ProductsList products={loadedProducts} method="delete" />
        )}
      </Await>
    </Suspense>
  );
}

export default ProductsPage;

async function loadProducts() {
  //Localhost: http://localhost/PHP/getproducts.php
  //000webhost: http://juniortest-reinis.000webhostapp.com/getproducts.php
  const response = await fetch("http://juniortest-reinis.000webhostapp.com/getproducts.php");

  if (!response.ok) {
    throw json({ status: 500 });
  } else {
    const resData = await response.text();
    const jsonData = JSON.parse(resData);
    return jsonData;
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}
