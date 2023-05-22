import classes from "./ProductItem.module.css";

import Checkbox from "../UI/Checkbox/Checkbox";

function ProductItem(props) {
  const price = parseFloat(props.price).toFixed(2) + " $";

  let attributes = "";
  if (props.size != null) {
    attributes = "Size: " + props.size + " MB";
  }
  if (props.weight != null) {
    attributes = "Weight: " + props.weight + "KG";
  }
  if (props.height != null && props.width != null && props.length != null) {
    attributes = "Dimension: " + props.height + "x" + props.width + "x" + props.length;
  }

  return (
    <div className={classes.product}>
      <div className={classes.check}>
        <Checkbox
          className="delete-checkbox"
          value={props.value}
          isChecked={props.isChecked}
          checkHandler={props.checkHandler}
        />
      </div>
      <div className={classes.sku}>{props.sku}</div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.attributes}>{attributes}</div>
    </div>
  );
}

export default ProductItem;
