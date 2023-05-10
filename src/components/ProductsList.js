import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./ProductsList.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";

function ProductsList() {
  return (
    <Fragment>
    <div className={classes.mainselection}>
      <div>
        <h1 className={classes.title}>Product List</h1>
      </div>
      <div>
        <Link to="/add-product"><Button>ADD</Button></Link>
        <Button className={"last"}>MASS DELETE</Button>
      </div>
    </div>
    <Line />
  </Fragment>
  );
}

export default ProductsList;
