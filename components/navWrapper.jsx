"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/nav.jsx";

export default function ClientNavWrapper() {
  const pathname = usePathname();
  
  const hideNav =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/dashboard";
  
  return !hideNav && <Nav />;
}