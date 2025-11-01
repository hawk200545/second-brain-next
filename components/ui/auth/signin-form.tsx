'use client';
import * as z from "zod";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {toast} from "sonner";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SigninSchema } from ".";

function SigninForm(){
  const router = useRouter();
  const form = useForm<z.infer <typeof SigninSchema>>({
    resolver : zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
    const res = await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: false,
  });

  if (res?.ok) {
      toast.success("Signin Successfull");
      router.push('/');
  }
  else{
    toast.error(res?.error ?? "Invalid Credentials");
  }
  } 
  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}  className={cn("space-y-4")}>
              <FormField
                name="email"
                control={form.control}
                render={({field})=><FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="email@gmail.com"
                      type="email"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                }
              />
              <FormField
                name="password"
                control={form.control}
                render={({field})=><FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      type="password"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                }
              />
              <Button className={cn("w-full")} type="submit">
                  Signin
              </Button>
          </form>
      </Form>
    );
}

export default SigninForm;
