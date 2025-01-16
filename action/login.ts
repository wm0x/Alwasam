"use server";

// import zod lib
import * as z from "zod";
// this import for hash passwords
//import form auth lib
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// import from schemas
import { LoginSchema } from "../schemas/login-index";

// this for verification
import { getUserByUsername } from "../data/user";
import bcrypt from "bcryptjs";

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
  // now must be i redirect user to dash board but i have qoustuin must be return with user his usertype why ? beacuse i have permission for every usertype or in dashboard get the user type ?
    const redirectTo = "/dashboard"

    await signIn("credentials", {
      username,
      password,
      redirectTo, // take it form the up object
    });
  return {
    success: true,
    message: " تم تسجيل الدخول بنجاح ",
  };
};
