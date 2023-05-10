import classes from "./ProductItem.module.css";
import Checkbox from "../UI/Checkbox/Checkbox";

function ProductItem(props) {
  const price = parseFloat(props.price).toFixed(2) + " $";

  let attributes = "";
  if (props.type_id === "1") {
    attributes = "Size: " + props.size + " MB";
  }
  if (props.type_id === "2") {
    attributes = "Weight: " + props.weight + "KG";
  }
  if (props.type_id === "3") {
    attributes =
      "Dimension: " + props.height + "x" + props.width + "x" + props.length;
  }

  return (
    <div className={classes.product}>
      <div className={classes.check}>
        <Checkbox />
      </div>
      <div className={classes.sku}>{props.sku}</div>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.attributes}>{attributes}</div>
    </div>
  );
}

export default ProductItem;
