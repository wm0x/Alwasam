import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(3, { message: " اسم المستخدم غير كافي " }),

  password: z.string().min(4, { message: " كلمة المرور غير كافيه " }),
});
