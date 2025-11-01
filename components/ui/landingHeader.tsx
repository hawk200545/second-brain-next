'use client'
import {cn} from "@/lib/utils";
import {Button} from '@/components/ui/button';
import { ModeToggle } from "./themeButton";
import { useRouter } from "next/navigation";
export default function LandingHeader(){
    const router = useRouter();
    return (
        <div className={cn("")}>
            <div className={cn("bg-slate-900/4 fixed min-w-fit flex-1 inset-x-0 py-2 px-10 rounded-full my-3 mx-20 backdrop-blur-lg z-10",
                "backdrop-blur-sm border border-slate-950/5 dark:border-slate-50/5 shadow-2xs"
            )}>
                <div className={cn("flex justify-between items-center")}>
                     <h3 className={cn("text-xl font-bold",)}>Second Brain</h3>
                    <div className={cn("space-x-2 flex h-full")}>
                        <ModeToggle  />
                        <Button size="default" variant={"secondary"} onClick={()=>router.push('/signin')}>
                            Signin
                        </Button>
                        <Button size="default" variant={"default"} onClick={()=>router.push('/signup')}>
                            Signup
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}