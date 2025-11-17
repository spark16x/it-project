"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Nav({ className }) {
  return (
    <div
      className={`
        w-full h-[55px] flex justify-between items-center fixed top-0 left-0 z-50 px-6
        bg-white/10 backdrop-blur-xl border-b border-white/20
        shadow-[0_0_20px_rgba(0,150,255,0.3)]
        ${className}
      `}
    >
      {/* Logo */}
      <div className="text-xl font-semibold tracking-wide text-white drop-shadow-[0_0_5px_rgba(0,150,255,0.7)]">
        JARVIS
      </div>

      {/* Nav Menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/login", label: "Login" },
            { href: "/signup", label: "Sign up" },
          ].map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                asChild
                className={`
                  text-white/90 px-2 py-1 transition 
                  hover:text-white hover:drop-shadow-[0_0_6px_rgb(0,150,255)]
                `}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}