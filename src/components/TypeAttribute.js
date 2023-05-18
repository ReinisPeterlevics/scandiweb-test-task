import { Fragment } from "react";

import InputItem from "./InputItem";

const attributeTypes = [
  {
    attrType: "1",
    sub: "Please provide DVDs media size in megabytes",
    inputs: [
      {
        id: "#size",
        label: "Size (MB)",
        type: "number",
        name: "size",
        min: "0",
        step: "1",
      },
    ],
  },
  {
    attrType: "2",
    sub: "Please provide the weight in kilograms",
    inputs: [
      {
        id: "#weight",
        label: "Weight (KG)",
        type: "number",
        name: "weight",
        min: "0.0",
        step: "0.1",
      },
    ],
  },
  {
    attrType: "3",
    sub: "Please provide dimensions for furniture in HxWxL format",
    inputs: [
      {
        id: "#height",
        label: "Height (CM)",
        type: "number",
        name: "height",
        min: "0",
        step: "1",
      },
      {
        id: "#width",
        label: "Width (CM)",
        type: "number",
        name: "width",
        min: "0",
        step: "1",
      },
      {
        id: "#length",
        label: "Length (CM)",
        type: "number",
        name: "length",
        min: "0",
        step: "1",
      },
    ],
  },
];

function TypeAttribute(props) {
  const filteredAttributeTypes = attributeTypes.filter((type) => {
    return type.attrType.toString() === props.value;
  });

  if (filteredAttributeTypes.length === 0) {
    return <Fragment/>;
  }
  return (
    <Fragment>
      {filteredAttributeTypes.map((type) => (
        <Fragment key={type.attrType}>
          {type.inputs.map((input) => (
            <InputItem
              key={input.id}
              id={input.id}
              label={input.label}
              type={input.type}
              name={input.name}
              min={input.min}
              step={input.step}
              data={props.data}
            />
          ))}
          <sub>{type.sub}</sub>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default TypeAttribute;
