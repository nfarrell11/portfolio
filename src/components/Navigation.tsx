"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsMenuOpen(false)
    }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="font-bold text-2xl sm:text-3xl tracking-tight">
              Nick Farrell
              
            </h1>
            <span className="block text-sm font-medium text-gray-700">
                Developer &nbsp;|&nbsp; Project Manager &nbsp;|&nbsp; Artist
              </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 text-base sm:text-lg">
              <button onClick={() => scrollToSection("about")} className="hover:text-gray-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("gallery")} className="hover:text-gray-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection("cv")} className="hover:text-gray-600 transition-colors">
                CV
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
              <button
                onClick={() => scrollToSection("gallery")}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("cv")}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left"
              >
                CV
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
  )
}