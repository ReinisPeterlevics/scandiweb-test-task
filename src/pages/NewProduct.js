import { Suspense } from "react";
import { json, useLoaderData, defer, Await } from "react-router-dom";

import ProductForm from "../components/ProductForm";

function NewProductPage() {
  const { types } = useLoaderData();

  return (
    <Suspense>
      <Await resolve={types}>
        {(loadedTypes) => <ProductForm types={loadedTypes} method="POST" />}
      </Await>
    </Suspense>
  );
}

export default NewProductPage;

async function loadTypes() {
  //Localhost: http://localhost/PHP/gettypes.php
  //Hostinger: https://juniortest-reinis.fun/PHP/gettypes.php
  const response = await fetch("https://juniortest-reinis.fun/PHP/gettypes.php",{
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
    types: loadTypes(),
  });
}
