import { MapPin } from "lucide-react"
import SocialLinks from "../SocialLinks"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-6">Nick Farrell</h3>
        <p className="text-sm text-gray-600">
          I’m always open to hearing about new projects, collaborations, or technical challenges &mdash; especially in the cultural or creative sectors.
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="w-5 h-5 text-gray-600" />
        <span>Vancouver, BC, Canada</span>
      </div>
      <div id="contact-socials">
        <h3 className="text-xl font-semibold mb-6 text-center">Follow Me</h3>
        <SocialLinks />
      </div>
    </div>
  )
}