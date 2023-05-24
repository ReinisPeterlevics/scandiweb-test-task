import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${
        props.className === "last" ? classes.last : null
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
      id={props.name}
    >
      {props.children}
    </button>
  );
}

export default Button;
