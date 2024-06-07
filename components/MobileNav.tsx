"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] flex justify-end items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Image
              src="/icons/hamburger.svg"
              width={20}
              height={20}
              alt="Menu"
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-slate-50 border-none">
          <Link
            className="flex w-full cursor-pointer items-center gap-2"
            href="/"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Gitbank logo"
            />
            <h1 className="text-26 text-ibm-plex-serif font-bold">Gitbank</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((items) => {
                  const isActive =
                    pathname === items.route ||
                    pathname.startsWith(`${items.route}/`);
                  return (
                    <SheetClose asChild key={items.route}>
                      <Link
                        href={items.route}
                        key={items.label}
                        className={cn(
                          "mobilenav-sheet_close w-full hover:bg-gray-200",
                          {
                            "bg-bank-gradient py-6 rounded-lg text-white":
                              isActive,
                          }
                        )}
                      >
                        <div className="w-full flex items-center gap-x-4">
                          <Image
                            src={items.imgURL}
                            alt={items.label}
                            width={20}
                            height={20}
                            className={cn("", {
                              "brightness-[3] invert-0": isActive,
                            })}
                          />

                          <p
                            className={cn(" text-black-2 font-semibold", {
                              "text-white": isActive,
                            })}
                          >
                            {items.label}
                          </p>
                        </div>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <div className="w-full border-t-2 border-gray-200 -mt-20">
                <Footer user={user} type="mobile" />
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
