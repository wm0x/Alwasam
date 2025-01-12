"use client"

import React, { useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#1d1d1d] min-h-screen " dir="rtl">
      <div className="min-h-screen flex items-center justify-center text-white">
        <CardWrapper headerLabel="تسجيل الدخول الى نظام الوسام">
          <div className="border-t mb-5"></div>
          <Input
            className="bg-white hover:border-red-300 mb-3 text-balance"
            placeholder="اسم المستحدم"
          ></Input>
          <Input
            placeholder=" كلمة المرور "
            className="bg-white hover:border-red-300 "
            type={showPassword ? "text" : "password"}
          />
          <div className="flex gap-2 mt-4 items-center" dir="rtl">
            <input
              type="checkbox"
              onChange={togglePasswordVisibility}
              className="w-4 h-4 border-gray-300 rounded-md"
            />
            <span className="font-black text-white flex items-center justify-center text-center text-xs">
              {showPassword ? "اخفاء كلمة المرور" : "اظهار كلمة المرور"}
            </span>
          </div>
          <div className="w-full flex items-center justify-center">
            <Button variant={"alwasam2"} className="mt-7 w-full text-white">تسجيل الدخول</Button>
          </div>
        </CardWrapper>
      </div>
    </div>
  );
};
