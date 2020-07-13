import React from "react";
import App from "next/app";
import "../styles/app.css";
import "../styles/reach.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "@reach/tabs/styles.css";

import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    );
  }
}

export default MyApp;
