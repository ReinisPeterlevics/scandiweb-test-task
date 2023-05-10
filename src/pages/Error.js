import { Fragment } from "react";
import { useRouteError } from "react-router-dom";

import MainFooter from "../components/MainFooter";

function ErrorPage() {
  const error = useRouteError();
  const errName = "ERROR " + error.status;
  const errMessage = error.data.message;

  return (
    <Fragment>
      <h3>{errName}</h3>
      <p>{errMessage}</p>
      <MainFooter />
    </Fragment>
  );
}

export default ErrorPage;
