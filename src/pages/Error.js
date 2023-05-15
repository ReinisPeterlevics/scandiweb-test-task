import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

import MainFooter from "../components/MainFooter";

function ErrorPage() {
  const error = useRouteError();
  const errName = "ERROR: " + error.status;

  return (
    <Fragment>
      <h3>{errName}</h3>
      <MainFooter />
    </Fragment>
  );
}

export default ErrorPage;
