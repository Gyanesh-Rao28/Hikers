import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ClientNav from "./ClientNav";

const NavBar = async () => {


  return (
    <nav className="w-full flex justify-center">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between w-full md:w-5/6">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <span className="text-2xl font-semibold">Hikers</span>
        </Link>
        <NavigationMenu className="ml-auto hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/trips"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:opacity-50 data-[state=open]:opacity-50"
              >
                Browse Trips
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:opacity-90 focus:opacity-90 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:opacity-50 data-[state=open]:opacity-50"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

            <ClientNav />

          </NavigationMenuList>
        </NavigationMenu>

        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-300">
            <div className="grid gap-2 py-6">
              <Link
                href="/trips"
                className="flex w-full items-center p-3 rounded-xl text-lg font-medium hover:bg-blue-100 hover:text-blue-600"
              >
                Browse Trips
              </Link>
              <Link
                href="/contact"
                className="flex w-full items-center p-3 rounded-xl text-lg font-medium hover:bg-blue-100 hover:text-blue-600"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="flex w-full items-center p-3 rounded-xl text-lg font-medium hover:bg-blue-100 hover:text-blue-600"
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet> */}

      </header>
    </nav>
  );
};

export default NavBar;
