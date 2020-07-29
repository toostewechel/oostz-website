import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <html className="overflow-hidden h-full" lang="nl">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Muli:wght@300;400;500&family=Public+Sans:wght@500;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="subpixel-antialiased overflow-auto h-full">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
