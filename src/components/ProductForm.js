import { useState } from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigate,
} from "react-router-dom";

import classes from "./ProductForm.module.css";
import Line from "../UI/Line/Line";
import Button from "../UI/Button/Button";
import TypeAttribute from "./TypeAttribute";
import InputItem from "./InputItem";
import InputWarning from "./InputWarning";

function ProductForm({ types, method }) {
  const navigate = useNavigate();
  const data = useActionData();
  const [selectedType, setSelectedType] = useState("");

  const typeOptions = types.map((type) => (
    <option key={type.type_id} value={type.type_id}>
      {type.type_name}
    </option>
  ));

  function cancelHandler() {
    navigate("..");
  }

  function selectChangeHandler(event) {
    setSelectedType(event.target.value);
  }

  return (
    <Form method={method}>
      <div className={classes.mainselection}>
        <div>
          <h1 className={classes.title}>Product Add</h1>
        </div>
        <div>
          <Button type="submit">Save</Button>
          <Button type="button" onClick={cancelHandler} className={"last"}>
            Cancel
          </Button>
        </div>
      </div>
      <Line />
      <div className={classes.form}>
        <div className={classes.forminput}>
          <InputItem id="#sku" label="SKU" type="text" name="sku" data={data} />
          <InputItem id="#name" label="Name" type="text" name="name" data={data} />
          <InputItem id="#price" label="Price ($)" type="number" name="price" min="0.00" step="0.01" data={data} />
          <p>
            <label htmlFor="#productType">Type Switcher</label>
            <select
              id="#productType"
              name="productType"
              defaultValue={"DEFAULT"}
              onChange={selectChangeHandler}
              required
            >
              <option value="DEFAULT" hidden disabled></option>
              {typeOptions}
            </select>
          </p>
          <InputWarning data={data} dataKey="productType" />
          <TypeAttribute value={selectedType} data={data} />
        </div>
      </div>
    </Form>
  );
}

export default ProductForm;

export async function action({ request }) {
  const method = request.method;
  const data = await request.formData();
  const productType = data.get("productType");

  const productData = {
    sku: data.get("sku"),
    name: data.get("name"),
    price: data.get("price"),
    productType: productType,
    size: productType === "1" ? data.get("size") : null,
    height: productType === "3" ? data.get("height") : null,
    width: productType === "3" ? data.get("width") : null,
    length: productType === "3" ? data.get("length") : null,
    weight: productType === "2" ? data.get("weight") : null,
  };

  const response = await fetch("http://localhost/PHP/putproduct.php", {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 422) {
    const resData = await response.text();
    const jsonData = JSON.parse(resData);
    console.log(jsonData);
    return jsonData;
  }

  if (!response.ok) {
    throw json({ status: 500 });
  }

  return redirect("/");
}
