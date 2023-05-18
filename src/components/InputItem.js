import { Fragment } from "react";

import InputWarning from "./InputWarning";

function InputItem(props) {
  return (
    <Fragment>
      <p>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          key={props.id}
          id={props.id}
          type={props.type}
          name={props.name}
          min={props.min}
          step={props.step}
        />
      </p>
      <InputWarning data={props.data} dataKey={props.name} />
    </Fragment>
  );
}

export default InputItem;
