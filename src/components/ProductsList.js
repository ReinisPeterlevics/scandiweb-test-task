import { Link } from "react-router-dom";

import classes from "./ProductsList.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";

function ProductsList() {
  return (
    <header>
      <div className={classes.mainselection}>
        <h1 className={classes.title}>Product List</h1>
        <div className={classes.buttons}>
          <Link to="/add-product"><Button>Add</Button></Link>
          <Button>Mass delete</Button>
        </div>
      </div>
      <Line />
    </header>
  );
}

export default ProductsList;
