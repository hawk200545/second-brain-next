'use client';
import * as z from "zod";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupSchema } from ".";
import { toast } from "sonner";

function SignupForm(){
  const form = useForm<z.infer <typeof SignupSchema>>({
    resolver : zodResolver(SignupSchema),
    defaultValues: {
      email: "",
      password: "",
      username: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: values.email,
        password: values.password,
        name: values.username
      }),
    });

    if (response.ok) {
      toast.success("Signup Success");
      await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: true,
        callbackUrl: "/",
      });
    } else {
      const data =  await response.json();
      toast.error(data.error || "Error while signing up");
    }
  };

  return (
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}  className={cn("space-y-4")}>
              <FormField
                name="username"
                control={form.control}
                render={({field})=><FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="David"
                      type="text"
                      {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                }
              />
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
                  Signup
              </Button>
          </form>
      </Form>
    );
}

export default SignupForm;
