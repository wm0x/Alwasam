"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { LoginSchema } from "../schemas/login-index";
import { getUserByUsername } from "../data/user";
import { DEFAULT_LOGIN_REDIRECT } from "../src/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validDataFields = LoginSchema.safeParse(values);

  //TODO هنا شغله مهمه
  if (!validDataFields.success) {
    return { error: " خطأ في تسجيل الدخول " };
  }

  const { username, password } = validDataFields.data;

  // now we will search about user in db how we will do it ? ... in data folder we create method is get user be username right this what we will use it there
  const existingUser = await getUserByUsername(username);

  // there if u git error in username and password (Property 'username' does not exist on type 'Promise<{ username: string; password: string; type: string |... ) the sul it's just use the await in get method
  if (!existingUser || !existingUser.username || !existingUser.password) {
    return { error: " حدث خطأ أثناء تسجيل الدخول " };
  }

  // هنا بنسوي فك التشفير للباس المشفر في قاعدة البيانات
  // don't forget await there because must be w
  const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordMatch) {
    return { error: " حدث خطأ اثناء تسجيل الدخول " };
  }

  const result = await signIn("credentials", {
    username,
    password,
    redirect: false, // هنا حل المشكله اللي تحت
  });

  if (result?.error) {
    return { error: result.error || "حدث خطأ أثناء تسجيل الدخول" };
  }
  // there his give me problem it is in path of website .. if i login it is redirect me to the what i want website but the path localhost:3000 still path:3000/auth/login not path:3000/dashboard that what i want.. what is solution it's in redirect in the up before i use redirect : true => DEFAULT_REDIRECT... as like this 
  return { success: true, redirectUrl: DEFAULT_LOGIN_REDIRECT };
};
