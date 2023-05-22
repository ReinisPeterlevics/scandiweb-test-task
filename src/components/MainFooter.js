import classes from "./MainFooter.module.css";

import Line from "../UI/Line/Line"

function MainFooter() {
  return (
    <footer>
      <Line />
      <h4 className={classes.footername}>Scandiweb Test assignment</h4>
    </footer>
  );
}

export default MainFooter;
