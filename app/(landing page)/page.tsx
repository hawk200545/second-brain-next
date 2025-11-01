import { BackgroundRippleEffect } from "@/components/ui/backround-ripple-effect";
import { getServerSession } from "next-auth";
export default async function Home(){
    const session =  await getServerSession();
    console.log(session?.user);
    return (
        <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
            <BackgroundRippleEffect rows={35} cols={35} />
            <div className="mt-60 w-full">
                <h2 className="relative z-10 mx-auto  max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
                Welcome to Second Brain
                </h2>
                <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
                A knowledge management system which enables you to store, organize and retrieve pices of Information
                </p>
            </div>
        </div>
    )
}
