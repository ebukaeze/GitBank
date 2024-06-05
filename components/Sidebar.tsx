"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          className="flex w-full mb-12 cursor-pointer items-center gap-2"
          href="/"
        >
          <Image
            src="/icons/logo.svg"
            width={20}
            height={20}
            alt="Gitbank logo"
            className="size-[54px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Gitbank</h1>
        </Link>
        {sidebarLinks.map((items) => {
          const isActive =
            pathname === items.route || pathname.startsWith(`${items.route}/`);
          return (
            <Link
              href={items.route}
              key={items.label}
              className={cn("sidebar-link hover:bg-gray-200", {
                "bg-bank-gradient py-3 rounded-lg text-white": isActive,
              })}
            >
              <div className="w-full flex items-center gap-x-4">
                <div className="size-6 relative">
                  <Image
                    src={items.imgURL}
                    alt={items.label}
                    fill
                    className={cn("", {
                      "brightness-[3] invert-0": isActive,
                    })}
                  />
                </div>
                <p
                  className={cn("sidebar-label text-black-2", {
                    "text-white": isActive,
                  })}
                >
                  {items.label}
                </p>
              </div>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
