import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainFooter from "../components/MainFooter";

function RootLayout() {
  return (
    <Fragment>
      <main>
        <Outlet />
      </main>
      <MainFooter />
    </Fragment>
  );
}

export default RootLayout;
