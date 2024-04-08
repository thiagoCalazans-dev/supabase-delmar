"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { cn } from "@/lib/cn";
import {
  PanelLeft,
  ShoppingCart,
  Package,
  LineChart,
  Turtle,
  DoorOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <Turtle />,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LineChart />,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: <ShoppingCart />,
  },
  {
    name: "Products",
    href: "/products",
    icon: <Package />,
  },
];

export function MobileHeader() {
  const pathName = usePathname();
  return (
    <header className="sticky top-0 z-30 flex h-14 justify-between items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            {navLinks.map((item) => {
              const isActive = pathName.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-2.5  )",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="sm:hidden">
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <DoorOpen className="overflow-hidden text-" />
        </Button>
      </div>
    </header>
  );
}
