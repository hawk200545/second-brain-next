import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Socials from "@/components/ui/auth/socials"
import { AuthBranding } from "@/components/ui/auth/auth-branding";
import Link from "next/link";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500", "700"],
});

type SigninLayoutProps = Readonly<{ children: ReactNode }>;

export default function SigninLayout({ children }: SigninLayoutProps) {
  return (
    <div className={cn("flex justify-center items-center py-12")}>
      <Card className={cn("max-w-[500px] min-w-[350px] shadow-2xl bg-white/60 dark:bg-black/60 backdrop-blur-sm backdrop-invert", inter.className)}>
        <CardHeader className="items-center">
          <AuthBranding />
        </CardHeader>
        <CardContent>{children}</CardContent>
        
        <CardFooter className="flex flex-col gap-y-3">
          <Socials/>
          <Link href="/signup" className="text-sm">Dont Have Account?</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
