import { Fragment } from "react";

function TypeAttribute(props) {
  let attributeContent = "";

  if (props.value === "1") {
    attributeContent = (
      <Fragment>
        <p>
          <label htmlFor="#size">Size (MB)</label>
          <input
            id="#size"
            type="number"
            name="size"
            min="0"
            step="1"
            required
          />
        </p>
        <sub>Please provide DVDs media size in megabytes</sub>
      </Fragment>
    );
  }

  if (props.value === "2") {
    attributeContent = (
      <Fragment>
        <p>
          <label htmlFor="#height">Height (CM)</label>
          <input
            id="#height"
            type="number"
            name="height"
            min="0"
            step="1"
            required
          />
        </p>
        <p>
          <label htmlFor="#width">Width (CM)</label>
          <input
            id="#width"
            type="number"
            name="width"
            min="0"
            step="1"
            required
          />
        </p>
        <p>
          <label htmlFor="#length">Length (CM)</label>
          <input
            id="#length"
            type="number"
            name="length"
            min="0"
            step="1"
            required
          />
        </p>
        <sub>Please provide dimensions for furniture in HxWxL format</sub>
      </Fragment>
    );
  }

  if (props.value === "3") {
    attributeContent = (
      <Fragment>
        <p>
          <label htmlFor="#weight">Weight (KG)</label>
          <input
            id="#weight"
            type="number"
            name="weight"
            min="0.0"
            step="0.1"
            required
          />
        </p>
        <sub>Please provide the weight in kilograms</sub>
      </Fragment>
    );
  }

  return attributeContent;
}

export default TypeAttribute;
