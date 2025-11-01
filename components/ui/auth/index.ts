import * as z from "zod";


const SigninSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, { message: "Password is required" }),
});

const SignupSchema = z.object({
  username : z.string({message: "name should be string"})
  .min(4,{message: "Minimum 4 characters is required"})
  .max(8, {message: "Maximum limit is 8 characters "}),
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, { message: "Password is required" }),
});

export {SigninSchema,SignupSchema};