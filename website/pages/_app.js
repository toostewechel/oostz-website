import React from "react";
import App from "next/app";
import "../styles/app.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import "@reach/tabs/styles.css";

import { init } from "../components/googleAnalytics";

import { MDXProvider } from "@mdx-js/react";

import * as components from "../components/MDX";

init();

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
