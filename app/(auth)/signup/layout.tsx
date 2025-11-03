import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Socials from "@/components/ui/auth/socials";
import { AuthBranding } from "@/components/ui/auth/auth-branding";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import Link from "next/link";

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
            <Card className={cn("max-w-[500px] min-w-[250px] bg-white/60 dark:bg-black/60 backdrop-blur-lg", inter.className)}>
                <CardHeader className="items-center">
                    <AuthBranding />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                <CardFooter className="flex flex-col gap-y-3">
                    <Socials/>
                    <Link href="/signin" className="text-sm">Have an Account?</Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignupLayout;
