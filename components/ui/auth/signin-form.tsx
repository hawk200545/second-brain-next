'use client';
import * as z from "zod";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  const form = useForm<z.infer <typeof SigninSchema>>({
    resolver : zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (values: z.infer<typeof SigninSchema>) => {
    console.log("Hi", values)
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
