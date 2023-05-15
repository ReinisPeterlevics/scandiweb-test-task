import { json, useLoaderData, defer, Await } from "react-router-dom";

import ProductsList from "../components/ProductsList";
import { Suspense } from "react";

function ProductsPage() {
  const { products } = useLoaderData();

  return (
    <Suspense>
      <Await resolve={products}>
        {(loadedProducts) => <ProductsList products={loadedProducts} />}
      </Await>
    </Suspense>
  );
}

export default ProductsPage;

async function loadProducts() {
  const response = await fetch("http://localhost/PHP/getproducts.php");

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
