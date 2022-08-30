import React from "react";
import { Container } from "semantic-ui-react";
// Head is a helper from Next.js to place things
// like links or meta tags in the Head tag
// of The document
import Head from "next/head";
import Header from "./Header";

const Layout = props => {
  return (
    <div>
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          ></link>
        </Head>
        <Header />
        {props.children}
      </Container>
    </div>
  );
};
export default Layout;
