import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
class WorkbookTeachersDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WorkbookTeachersDocument;
