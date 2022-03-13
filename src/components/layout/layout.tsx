import * as React from "react";

import "../../styles/globals.css";

const Layout = (props: { children?: React.ReactNode }) => {
  return <div>{props.children}</div>;
};

export default Layout;
