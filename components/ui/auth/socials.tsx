'use client'
import { FaGoogle, FaGithub } from "react-icons/fa"
import { Button } from "../button"
import { signIn } from "next-auth/react"
import { cn } from "@/lib/utils"
function Socials() {
  return (
    <div className={cn("flex w-full items-center gap-4")}>
      <Button
        className="flex-1 gap-2 items-center"
        variant="outline"
        onClick={() => signIn("google")}
      >
        <FaGoogle className="h-4 w-4" aria-hidden="true" />
        <span className="">Continue with Google</span>
      </Button>
      <Button
        className="flex-1 gap-2 py-5"
        variant="outline"
        onClick={() => signIn("github")}
      >
        <FaGithub className="h-4 w-4" aria-hidden="true" />
        <span className="">Continue with GitHub</span>
      </Button>
    </div>
  )
}

export default Socials;
