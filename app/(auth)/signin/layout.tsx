'use client';

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500", "700"],
});

type SigninLayoutProps = Readonly<{ children: ReactNode }>;

export default function SigninLayout({ children }: SigninLayoutProps) {
  return (
    <div className={cn("flex justify-center items-center py-12")}>
      <Card className={cn("max-w-[500px] min-w-[350px] shadow-2xl", inter.className)}>
        <CardHeader className="text-xl font-semibold">
          Tap into the world of second brain.
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
