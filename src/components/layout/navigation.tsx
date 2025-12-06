"use client";

import { usePathname } from "next/navigation";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/common/navigation-menu";
import { Link } from "@/components/common/link";

const pages = [
  { path: "/coding", label: "Coding" },
  { path: "/timeline", label: "Timeline" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {pages.map(({ path, label }) => (
          <NavigationMenuItem key={label}>
            <NavigationMenuLink
              asChild
              active={pathname === path}
              className={navigationMenuTriggerStyle()}
            >
              <Link variant="unstyled" href={path}>
                {label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
