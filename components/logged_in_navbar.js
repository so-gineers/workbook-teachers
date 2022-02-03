import { Navbar, Button, Segmented, SegmentedButton } from "konsta/react";
import Link from "next/link";
import React from "react";

export default function LoggedInNavbar({
  title,
  activeSubNavBarItem,
  setActiveSubNavBarItem,
}) {
  return (
    <Navbar
      title={title}
      left={<Button outline>Menu</Button>}
      right={
        <Button outline href="api/auth/signout">
          Logout
        </Button>
      }
      subnavbar={
        <SubNavBar
          active={activeSubNavBarItem}
          setActiveSubNavBarItem={setActiveSubNavBarItem}
        />
      }
    />
  );
}

const SubNavBar = ({ active, setActiveSubNavBarItem }) => {
  return (
    <Segmented strong>
      <SubNavBarItem
        setActiveSubNavBarItem={setActiveSubNavBarItem}
        active={active == 0 ? true : false}
        text="In Review"
        index={0}
      />
      <SubNavBarItem
        setActiveSubNavBarItem={setActiveSubNavBarItem}
        active={active == 1 ? true : false}
        text="To Review"
        index={1}
      />
      <SubNavBarItem
        setActiveSubNavBarItem={setActiveSubNavBarItem}
        active={active == 2 ? true : false}
        text="Topics"
        index={2}
      />
    </Segmented>
  );
};

const SubNavBarItem = ({ active, text, setActiveSubNavBarItem, index }) => {
  return (
    <SegmentedButton
      small
      strong
      {...(active && { active: active })}
      onClick={() => {
        setActiveSubNavBarItem(index);
      }}
    >
      {text}
    </SegmentedButton>
  );
};
