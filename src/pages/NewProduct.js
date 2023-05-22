import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import ProductForm from "../components/ProductForm";

function NewProductPage() {
  const { types } = useLoaderData();

  return (
    <Suspense>
      <Await resolve={types}>
        {(loadedTypes) => <ProductForm types={loadedTypes} method="post" />}
      </Await>
    </Suspense>
  );
}

export default NewProductPage;

async function loadTypes() {
  const response = await fetch("http://localhost/PHP/gettypes.php");

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
    types: loadTypes(),
  });
}
