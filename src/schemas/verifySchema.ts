import { z } from "zod";

//this is required when we want to verify the signup user
export const verifySchema = z.object({
  code: z.string().length(6, "Code must be 6 characters"),
});
