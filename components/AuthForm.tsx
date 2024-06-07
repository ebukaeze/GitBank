"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authSchema } from "./schemas/formSchama";
import { Button } from "./ui/button";
import {
  Form,
  FormDescription,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = authSchema(type);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const router = useRouter();
  console.log(err);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      //Sign up with Appwrite and get Plaid token
      if (type === "sign-up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });

        if (response) router.push("/");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="auth-form px-4 bg-white">
      <header className="flex flex-col gap-4 md:gap-6">
        <Link className="flex w-full cursor-pointer gap-2 items-start" href="/">
          <Image
            src="/icons/logo.svg"
            width={35}
            height={35}
            alt="Gitbank logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1 ">
            Gitbank
          </h1>
        </Link>
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-24 lg:text-36 font-bold text-gray-900 gap-4">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-18 font-normal text-gray-600 gap-2">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* Plaid  */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex">
                <p className="text-sm text-red-500">{err}</p>
              </div>
              {type === "sign-up" && (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your First Name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your Last Name"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your Last Address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Enter your City"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Example: Lagos"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Example: 102113"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="DD-MM-YYYY"
                      type="date"
                    />
                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="Example: 54221"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={28} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center items-center gap-1">
            <p className="text-16 text-black-1">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "sign-up" : "sign-in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
