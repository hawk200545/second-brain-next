'use client'
import { FaGoogle, FaGithub } from "react-icons/fa"
import { Button } from "../button"
import { signIn } from "next-auth/react"
function Socials(){
    return (
        <div>
            <Button>
                <FaGoogle width={4} height={4} onClick={()=>signIn("google")}/>
            </Button>
            <Button>
                <FaGithub width={4} height={4} onClick={()=>signIn("github")}/>
            </Button>
        </div>
    )
}

export default Socials;