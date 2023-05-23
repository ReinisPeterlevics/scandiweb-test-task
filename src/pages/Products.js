import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import ProductsList from "../components/ProductsList";

function ProductsPage() {
  const { products } = useLoaderData();

  return (
    <Suspense>
      <Await resolve={products}>
        {(loadedProducts) => (
          <ProductsList products={loadedProducts} />
        )}
      </Await>
    </Suspense>
  );
}

export default ProductsPage;

async function loadProducts() {
  //Localhost: http://localhost/PHP/getproducts.php
  //Hostinger: https://juniortest-reinis.fun/PHP/getproducts.php
  const response = await fetch("https://juniortest-reinis.fun/PHP/getproducts.php",{
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

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
