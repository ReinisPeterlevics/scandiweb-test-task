import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./ProductsList.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";
import ProductItem from "./ProductItem";

function ProductsList({products}) {
  const productList = products.map((product) => (
    <ProductItem
      key={product.product_id}
      sku={product.product_SKU}
      name={product.product_name}
      price={product.product_price}
      type_id={product.product_type_id}
      size={product.product_size}
      height={product.product_height}
      width={product.product_width}
      length={product.product_length}
      weight={product.product_weight}
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
      <div className={classes.list}>{productList}</div>
    </Fragment>
  );
}

export default ProductsList;
