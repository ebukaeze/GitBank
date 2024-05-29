import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LucideEdit } from "lucide-react";
import BankCard from "./BankCard";
import Profile from "./Profile";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar shadow py-2">
      <section className="flex flex-col pb-8">
        <Profile user={user} transactions={transactions} banks={banks} />
        {/*         <div className="profile-banner"> </div>

         */}
        {/* <div className="w-full flex justify-between items-center py-2 px-4">
          <h1 className="text-xl font-semibold text-emerald-950">Profile</h1>

          <Link
            href="/edit"
            className="p-3 bg-gray-50 rounded-lg border-2 border-emerald-700 border-opacity-10"
          >
            <LucideEdit color="gray" />
          </Link>
        </div>
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName.charAt(0)}
            </span>
          </div>
          <div className="profile-details text-center">
            <h1 className="text-xl font-semibold ">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div> */}
      </section>
      <section className="banks">
        <div className="flex w-full justify-between items-center">
          <h2 className="header-2">My Banks</h2>
          <Link href="flex">
            <Button
              variant="link"
              color="white"
              size="lg"
              className="flex gap-2 bg-neutral-900 text-white"
            >
              Add Bank
              <Image
                src="/icons/plus.svg"
                width={20}
                height={20}
                alt="Add Bank"
                className="invert-0 brightness-[3]"
              />
            </Button>
          </Link>
        </div>
        {banks.length > 0 && (
          <div
            className="flex flex-1 relative flex-col items-center
                   justify-center gap-5"
          >
            <div className="relative z-10">
              <BankCard
                bgColor={false}
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  bgColor={true}
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
