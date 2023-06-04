"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/common/navigation-menu";

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === "/"}
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === "/about"}
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/timeline" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === "/timeline"}
              className={navigationMenuTriggerStyle()}
            >
              Timeline
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink
              active={pathname === "/contact"}
              className={navigationMenuTriggerStyle()}
            >
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
