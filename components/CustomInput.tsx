import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { authSchema } from "./schemas/formSchama";
import { FieldPath } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const authFormSchema = authSchema("sign-up");
type InputData = {
  name: FieldPath<z.infer<typeof authFormSchema>>;
  control: Control<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder: string;
  type?: string;
};

const CustomInput = ({
  name,
  control,
  label,
  placeholder,
  type,
}: InputData) => {
  const [show, setShow] = useState(false);
  return (
    <FormField
      control={control}
      name={`${name}`}
      render={({ field }) => (
        <div className="form-item">
          <FormItem>
            <FormLabel className="form-label">{label}</FormLabel>
            <div className="flex flex-col w-full">
              {name === "password" ? (
                <>
                  <div className="relative flex items-center justify-center">
                    <FormControl>
                      <Input
                        placeholder={`${placeholder}`}
                        {...field}
                        className="input-class bg-white"
                        type={show ? "text" : type}
                      />
                    </FormControl>
                    <div
                      className="absolute w-5 h-5 right-1 z-10 flex items-center justify-center cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <>
                          <EyeOffIcon size={14} />
                        </>
                      ) : (
                        <>
                          <EyeIcon size={14} />
                        </>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <FormControl>
                    <Input
                      placeholder={`${placeholder}`}
                      {...field}
                      className="input-class bg-white"
                      type={type}
                    />
                  </FormControl>
                </>
              )}
            </div>

            <FormMessage className="text-red-500" />
          </FormItem>
        </div>
      )}
    />
  );
};

export default CustomInput;
