import { z } from "zod";
import validator from "validator";

export const authSchema = (type: string) =>
  z.object({
    email: z
      .string()
      .email("Please Enter a valid email address")
      .min(6, "Please enter at least 6 characters"),
    password: z
      .string()
      .min(8, {
        message:
          "Password must contain at least 8 characters, at least one uppercase and one special character.",
      })
      .refine(
        validator.isStrongPassword,
        "password should contain at least one Uppercase, and one special character"
      ),

    firstName:
      type === "sign-in"
        ? z.string().optional()
        : z.string({ message: "Please enter your first name" }).min(2),
    lastName:
      type === "sign-in"
        ? z.string().optional()
        : z.string({ message: "Please enter your last name" }).min(2),
    address1:
      type === "sign-in"
        ? z.string().optional()
        : z.string({ message: "Please enter your Address" }).min(8).max(50),
    city:
      type === "sign-in"
        ? z.string().optional()
        : z.string({ message: "Please enter your City" }).min(2).max(20),
    state:
      type === "sign-in"
        ? z.string().optional()
        : z.string({ message: "Please enter your State" }).min(2).max(10),
    postalCode:
      type === "sign-in"
        ? z.string().optional()
        : z.string({ message: "Please enter your Postal code" }).min(4).max(6),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string(),
    ssn:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string({ message: "Please enter your social security number" })
            .min(4, "your SSN should be at least 4 numbers")
            .max(10),
  });
