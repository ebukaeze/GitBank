import {
  BellIcon,
  ChevronDown,
  EditIcon,
  Link,
  LucideEdit,
} from "lucide-react";
import React from "react";

const Profile = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <div className="w-full items-center flex h-max px-3 py-3 justify-between">
      <div className="relative">
        <div className="h-3 w-3 bg-red-600 absolute -right-2 -top-2 rounded-full"></div>
        <BellIcon />
      </div>
      <div className="w-[88%] h-16 bg-transparent px-1 rounded-full flex">
        <div
          className="w-full h-full bg-neutral-100 rounded-full flex items-center
         justify-around pr-4 gap-x-4"
        >
          <div className="w-[62px] h-[62px] bg-white flex rounded-full shadow-slate-300 shadow-sm items-center justify-center">
            <div className="w-[60px] h-[60px] bg-gray-200 flex items-center justify-center rounded-full">
              <span className="text-xl font-semibold text-blue-600">
                {user.firstName[0]}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start w-full justify-center">
            <h1 className="text-sm font-medium text-neutral-700">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>

          <ChevronDown size={48} color="blue" />
        </div>
      </div>
      {/* <Link
        href="/edit"
        className="p-3 bg-gray-50 rounded-lg border-2 border-emerald-700 border-opacity-10"
      >
        <EditIcon color="black" />
      </Link> */}
    </div>
  );
};

export default Profile;
