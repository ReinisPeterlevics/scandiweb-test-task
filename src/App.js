import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsPage, { loader as productLoader } from "./pages/Products";
import NewProductPage, { loader as typeLoader } from "./pages/NewProduct";
import { action as addProduct } from "./components/ProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
        loader: productLoader,
      },
      {
        path: "add-product",
        element: <NewProductPage />,
        loader: typeLoader,
        action: addProduct,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
