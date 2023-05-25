import { Fragment } from "react";
import { Link, json, useRevalidator } from "react-router-dom";

import classes from "./ProductsList.module.css";

import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";
import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  const revalidator = useRevalidator();

  //Custom checkbox doesnt work with .checked being changed programmatically
  // function checkHandler(event) {
  //   let changedList = [...checked];
  //   if (event.target.checked) {
  //     changedList = [...checked, event.target.value];
  //   } else {
  //     changedList.splice(checked.indexOf(event.target.value), 1);
  //   }
  //   setChecked(changedList);
  // }

  // function isChecked(item) {
  //   return checked.includes(item.toString());
  // }

  async function deleteProductHandler() {
    //Custom checkbox doesnt work with .checked being changed programmatically
    // const checkedProducts = checked.reduce((ac, a) => ({ ...ac, [a]: a }), {});

    const checkedProducts = {};
    let checkboxes = document.getElementsByClassName("delete-checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) {
        checkedProducts[checkboxes[i].value] = checkboxes[i].value;
      }
    }

    console.log(JSON.stringify(checkedProducts));

    //Localhost: http://localhost/PHP/deleteproducts.php
    //Hostinger: https://juniortest-reinis.fun/PHP/deleteproducts.php
    const response = await fetch(
      "https://juniortest-reinis.fun/PHP/deleteproducts.php",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkedProducts),
      }
    );

    if (!response.ok) {
      throw json({ status: 500 });
    }

    // setChecked([]);
    return revalidator.revalidate();
  }

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
      value={product.product_id}
      // isChecked={isChecked(product.product_id)}
      // checkHandler={checkHandler}
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
          <Button
            onClick={deleteProductHandler}
            className={"last"}
            // disabled={checked.length === 0}
          >
            MASS DELETE
          </Button>
        </div>
      </div>
      <Line />
      <div className={classes.list}>{productList}</div>
    </Fragment>
  );
}

export default ProductsList;
