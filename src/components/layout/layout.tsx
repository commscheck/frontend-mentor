import * as React from 'react';
import { Helmet } from 'react-helmet';

import '../../styles/globals.css';

const Layout = (props: { children?: React.ReactNode }) => {
  return (
    <>
      <Helmet
        titleTemplate="%s | The Cranky Goblin"
        defaultTitle="The Cranky Goblin"
      >
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Helmet>
      {props.children}
    </>
  );
};

export default Layout;
