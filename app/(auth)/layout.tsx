import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex min-h-screen items-center justify-between  font-inter">
      {children}
      <div className="auth-asset">
        <Image
          src="/icons/auth-image.svg"
          width={500}
          height={500}
          alt="Auth Image"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
