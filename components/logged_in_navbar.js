import { Navbar, Button, Segmented, SegmentedButton } from "konsta/react";
import Link from "next/link";
import React from "react";

export default function LoggedInNavbar({ title }) {
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
        <Segmented strong>
          <SegmentedButton small strong active href="/">
            In Review
          </SegmentedButton>
          <SegmentedButton small strong>
            <Link href="reviewables">To Review</Link>
          </SegmentedButton>
          <SegmentedButton small strong>
            <Link href="exercises">Exercises</Link>
          </SegmentedButton>
        </Segmented>
      }
    />
  );
}
