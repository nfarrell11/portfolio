"use client"

import { Github, Linkedin } from "lucide-react"
import SocialButton from "./SocialButton"

export default function SocialLinks() {
 return (
  <div className="flex justify-center space-x-4">
    <SocialButton icon={Github} label="GitHub" url="https://github.com/nfarrell11" />
    <SocialButton icon={Linkedin} label="LinkedIn" url="https://www.linkedin.com/in/nick-farrell-3a71b5237" />
  </div>    
 )
}
