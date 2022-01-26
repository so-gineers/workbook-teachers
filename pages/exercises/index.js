import { Page, MenuList, MenuListItem } from "konsta/react";
import { FaRegEdit } from "react-icons/fa";
import LoggedInNavbar from "../../components/logged_in_navbar";
import React from "react";

export default function Exercises() {
  return (
    <Page>
      <LoggedInNavbar title="Manage exercises" />
      <MenuList>
        <MenuListItem
          title="French Essays"
          subtitle="......"
          media={<FaRegEdit />}
          href="topics/french_essays"
        />
        <MenuListItem
          title="Text Summary"
          subtitle="....."
          media={<FaRegEdit />}
        />
        <MenuListItem
          title="Text commenting"
          subtitle="....."
          media={<FaRegEdit />}
        />
      </MenuList>
    </Page>
  );
}
