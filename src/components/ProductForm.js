import { Fragment, useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import classes from "./ProductForm.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";
import TypeAttribute from "./TypeAttribute";

const DUMMY_TYPES = [
  {
    id: "1",
    title: "DVD",
  },
  {
    id: "2",
    title: "Furniture",
  },
  {
    id: "3",
    title: "Book",
  },
];

function ProductForm() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("");

  const typeOptions = DUMMY_TYPES.map((type) => (
    <option key={type.id} value={type.id}>{type.title}</option>
  ));

  function cancelHandler() {
    navigate("..");
  }

  function selectChangeHandler(event) {
    setSelectedType(event.target.value);
  }

  return (
    <Fragment>
      <div className={classes.mainselection}>
        <div>
          <h1 className={classes.title}>Product Add</h1>
        </div>
        <div>
          <Button>Save</Button>
          <Button type="button" onClick={cancelHandler} className={"last"}>
            Cancel
          </Button>
        </div>
      </div>
      <Line />
      <Form className={classes.form}>
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
            <select
              id="#productType"
              name="productType"
              defaultValue={"DEFAULT"}
              onChange={selectChangeHandler}
            >
              <option value="DEFAULT" hidden disabled ></option>
              {typeOptions}
            </select>
          </p>
          <TypeAttribute value={selectedType} />
        </div>
      </Form>
    </Fragment>
  );
}

export default ProductForm;
