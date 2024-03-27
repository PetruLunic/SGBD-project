"use client"

import {Link, Navbar, NavbarContent, NavbarItem} from "@nextui-org/react";
import {usePathname} from "next/navigation";


export default function AppNavbar() {
  const pathname = usePathname()

  console.log(pathname)

 return (
  <Navbar isBordered>
    <NavbarContent justify="center">
      <NavbarItem>
        <Link color={pathname === "/pc" ? "primary" : "foreground"} href="/pc">
          PC
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color={pathname === "/motherboard" ? "primary" : "foreground"} href="/motherboard">
          Motherboard
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color={pathname === "/ram" ? "primary" : "foreground"} href="/ram">
          RAM
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color={pathname === "/cpu" ? "primary" : "foreground"} href="/cpu">
          CPU
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color={pathname === "/gpu" ? "primary" : "foreground"} href="/gpu">
          GPU
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color={pathname === "/storage" ? "primary" : "foreground"} href="/storage">
          Storage
        </Link>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
 );
};