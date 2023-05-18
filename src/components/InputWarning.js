import classes from "./InputWarning.module.css";

function InputWarning(props) {
  return (
    props.data &&
    props.data[props.dataKey] && (
      <p className={classes.warning}>{Object.values(props.data[props.dataKey]).join("")}</p>
    )
  );
}

export default InputWarning;
