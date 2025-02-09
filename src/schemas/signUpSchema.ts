import { z } from "zod";

//we are defining it differently because we want to use it in multiple places
export const usernameValidation = z
  .string()
  .min(3, "Username must be atleast 3 characters")
  .max(20, "Username must be atmost 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username must contain only letters, numbers and underscores"
  );

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(3, "Password must be atleast 6 characters"),
});

//now go to verify schema
