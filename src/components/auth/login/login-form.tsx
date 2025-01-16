"use client";

import React, { useState, useTransition } from "react";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "../../../../schemas/login-index";
import { login } from "../../../../action/login";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const data = await login(values);
      if (data?.error) {
        form.reset();
        setError(data.error);
      }
    });
  };

  return (
    <div className="bg-[#1d1d1d] min-h-screen" dir="rtl">
      <div className="min-h-screen flex items-center justify-center text-white">
        <CardWrapper headerLabel="تسجيل الدخول الى نظام الوسام">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="bg-white hover:border-red-300 text-black"
                        placeholder="اسم المستخدم"
                      />
                    </FormControl>
                    <FormMessage className="text-[#e57373]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="كلمة المرور"
                        className="bg-white hover:border-red-300 text-black mt-2"
                        type={showPassword ? "text" : "password"}
                      />
                    </FormControl>
                    <FormMessage className="text-[#e57373]" />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 mt-4 items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                  className="w-4 h-4 border-gray-300 rounded-md"
                />
                <span className="font-black text-white text-xs">
                  {showPassword ? "اخفاء كلمة المرور" : "اظهار كلمة المرور"}
                </span>
              </div>
              <div className="mt-4">
                <FormError message={error} />
                <FormSuccess message={success} />
              </div>
              <div className="w-full flex items-center justify-center">
                <Button
                  disabled={isPending}
                  type="submit"
                  variant="alwasam2"
                  className="mt-7 w-full text-white"
                >
                  تسجيل الدخول
                </Button>
              </div>
            </form>
          </Form>
        </CardWrapper>
      </div>
    </div>
  );
};
