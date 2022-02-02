import React from "react";
import { App } from "konsta/react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // TODO use browser detection to change the  theme
    <SessionProvider session={session}>
      <App theme="ios">
        <Component {...pageProps} />
      </App>
    </SessionProvider>
  );
}

export default MyApp;
