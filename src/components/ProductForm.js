import { Form, useNavigate } from "react-router-dom";

import classes from "./ProductForm.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";

function ProductForm() {
  const navigate = useNavigate();

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form>
      <div className={classes.mainselection}>
        <h1 className={classes.title}>Product Add</h1>
        <div className={classes.buttons}>
          <Button>Save</Button>
          <Button type="button" onClick={cancelHandler}>
            Cancel
          </Button>
        </div>
      </div>
      <Line />
      <div className={classes.forminput}>
        <p>
          <label htmlFor="#sku">SKU</label>
          <input id="#sku" type="text" name="sku" required />
        </p>
        <p>
          <label htmlFor="#name">Name</label>
          <input id="#name" type="text" name="name" required />
        </p>
        <p>
          <label htmlFor="#price">Price ($)</label>
          <input
            id="#price"
            type="number"
            name="price"
            min="0.00"
            step="0.01"
            required
          />
        </p>
        <p>
          <label htmlFor="#productType">Type Switcher</label>
          <select id="#productType" name="productType">
            <option value="1">DVD</option>
            <option value="2">Furniture</option>
            <option value="3">Book</option>
          </select>
        </p>
      </div>
    </Form>
  );
}

export default ProductForm;
