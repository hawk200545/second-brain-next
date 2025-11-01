import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['500', '700'],
});

function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <div className={cn("flex justify-center items-center")}>
            <Card className={cn("max-w-[500px] min-w-[350px]", inter.className)}>
                <CardHeader>
                    Tap into the world of second brain.
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}

export default SignupLayout;