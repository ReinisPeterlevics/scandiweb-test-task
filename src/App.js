import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductsPage, { loader as productLoader} from "./pages/Products";
import NewProductPage, { loader as typeLoader} from "./pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductsPage />, loader: productLoader },
      { path: "add-product", element: <NewProductPage /> , loader: typeLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
