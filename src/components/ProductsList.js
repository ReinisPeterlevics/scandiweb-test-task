import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./ProductsList.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    sku: "DVR230623",
    name: "Movie",
    price: "12.99",
    type_id: "1",
    size: "2000",
    height: "",
    width: "",
    length: "",
    weight: "",
    type: "DVD",
  },
  {
    id: "2",
    sku: "BOR890327",
    name: "Manual",
    price: "16.5",
    type_id: "2",
    size: "",
    height: "",
    width: "",
    length: "",
    weight: "0.8",
    type: "Book",
  },
  {
    id: "3",
    sku: "FUR010903",
    name: "Chair",
    price: "20",
    type_id: "3",
    size: "",
    height: "120",
    width: "60",
    length: "60",
    weight: "",
    type: "Furniture",
  },
];

function ProductsList() {
  const products = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      sku={product.sku}
      name={product.name}
      price={product.price}
      type_id={product.type_id}
      size={product.size}
      height={product.height}
      width={product.width}
      length={product.length}
      weight={product.weight}
    />
  ));

  return (
    <Fragment>
      <div className={classes.mainselection}>
        <div>
          <h1 className={classes.title}>Product List</h1>
        </div>
        <div>
          <Link to="/add-product">
            <Button>ADD</Button>
          </Link>
          <Button className={"last"}>MASS DELETE</Button>
        </div>
      </div>
      <Line />
      <div className={classes.list}>{products}</div>
    </Fragment>
  );
}

export default ProductsList;
