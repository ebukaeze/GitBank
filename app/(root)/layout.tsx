import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser();

  if (!loggedInUser) redirect("/sign-in");
  return (
    <main className="w-full flex items-start justify-between">
      <Sidebar user={loggedInUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Gitbank" />
          <MobileNav user={loggedInUser} />
        </div>
        {children}
      </div>
    </main>
  );
}
