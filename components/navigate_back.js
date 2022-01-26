import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import React from "react";

export default function NavigateBack({ href }) {
  return (
    <>
      <Link href={href} passHref={true}>
        <FaAngleLeft />
      </Link>
    </>
  );
}
