import React from "react";
import { App } from "konsta/react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    // TODO use browser detection to change the  theme
    <SessionProvider>
      <App theme="ios">
        <Component {...pageProps} />
      </App>
    </SessionProvider>
  );
}

export default MyApp;
