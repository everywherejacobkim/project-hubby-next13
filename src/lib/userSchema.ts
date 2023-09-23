import * as z from "zod";

const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  image: z.string().optional(), 
});

export default userSchema;
