import classes from "./Checkbox.module.css";

function Checkbox(props) {
  return (
    <div className={classes.content}>
      <input className={`${props.className} ${props.isChecked ? classes.checked : null}`} type="checkbox" checked={props.isChecked} value={props.value} onChange={props.checkHandler}/>
    </div>
  )
}

export default Checkbox;