"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown as ChevronDownIcon } from "@/components/common/icons";
import { Button } from "@/components/common/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/common/sheet";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/common/navigation-menu";

const pages = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/timeline", label: "Timeline" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const handleMobileNavigationChange = (mobileNaviationOpen) => {
    setOpen(mobileNaviationOpen);
  };

  const activeLabel = pages.find(({ path }) => pathname === path)?.label;

  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {pages.map(({ path, label }) => (
            <NavigationMenuItem key={label}>
              <Link href={path} legacyBehavior passHref>
                <NavigationMenuLink
                  active={pathname === path}
                  className={navigationMenuTriggerStyle()}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet open={open} onOpenChange={handleMobileNavigationChange}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            {activeLabel}
            <ChevronDownIcon className="w-4 h-4 ml-2" />
          </Button>
        </SheetTrigger>
        <SheetContent position="top" size="full">
          <NavigationMenu orientation="vertical" className="mt-8">
            <NavigationMenuList className="flex-col">
              {pages.map(({ path, label }) => (
                <NavigationMenuItem key={label}>
                  <Link href={path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={() => handleMobileNavigationChange(false)}
                    >
                      {label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </>
  );
}
