import { useState } from "react";

// import classes from "./Checkbox.module.css";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  //Custom checkbox doesnt work with .checked being changed programmatically
  // <div className={classes.content}>
  //   <input
  //     className={`${props.className} ${
  //       isChecked ? classes.checked : null
  //     }`}
  //     id={props.value}
  //     type="checkbox"
  //     name={props.value}
  //     value={props.value}
  //     checked={isChecked}
  //     onChange={checkHandler}
  //     checked={props.isChecked}
  //     onChange={props.checkHandler}
  //   />
  // </div>

  return (
    <input
      className={props.className}
      id={props.value}
      type="checkbox"
      name={props.value}
      value={props.value}
      checked={isChecked}
      onChange={checkHandler}
    />
  );
}

export default Checkbox;
