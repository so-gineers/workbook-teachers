import { Page } from "konsta/react";
import LoggedInNavbar from "../components/logged_in_navbar";
import React from "react";

export default function Home() {
  return (
    <Page>
      <LoggedInNavbar title="Exercises to review" />
    </Page>
  );
}
