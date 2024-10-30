"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { UserButton } from "@clerk/nextjs";

export default function DashHeader() {
  return (
    <Navbar className="bg-[#3BC14A] text-white">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          WordWise
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          <UserButton/>
        </Navbar.Link>
       
      </Navbar.Collapse>
    </Navbar>
  );
}
