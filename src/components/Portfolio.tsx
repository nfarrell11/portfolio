// import type React from "react"

import ContactSection from "./Contact/Contact"
import CV from "./CV/CV"
import AboutSection from "./About/About"
import Gallery from "./Gallery/Gallery"

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-white">
      <Gallery />
      <AboutSection />
      <CV />
      <ContactSection />
    </div>
  )
}
