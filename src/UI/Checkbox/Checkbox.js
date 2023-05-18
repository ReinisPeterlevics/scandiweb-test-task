import { useState } from "react";

import classes from "./Checkbox.module.css";

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  function checkChangeHandler( ){
    setIsChecked((prevState) => !prevState)
  }

  return (
    <div className={classes.content}>
      <input className={`${props.className} ${isChecked ? classes.checked : null}`} type="checkbox" checked={isChecked} onChange={checkChangeHandler}/>
    </div>
  )
}

export default Checkbox;