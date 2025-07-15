"use client"
import { scrollToSection } from "@/lib/scroll";
import SocialLinks from "../SocialLinks";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2> */}

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
              <p className="text-lg text-gray-600">
                I&apos;m an interdisciplinary artist, application developer, and technical project leader with a decade of experience supporting major cultural institutions across Vancouver. My career has been built behind the scenes: coordinating exhibition installs, managing climate-controlled storage, and overseeing the safe transport of high-value artworks. I understand how to embrace change, meet deadlines under pressure, and build trust with clients from day one.
              </p>
              <p className="text-lg text-gray-600 mt-6">
                Today, I bring that same precision and systems thinking to software. I build web applications that solve real-world problems for small teams and service-based industries. My development approach emphasizes accessibility, responsive design, clean architecture, and customer-first thinking &mdash; always focused on tools that are intuitive to use, easy to maintain, and ready to scale.
              </p>
              <p className="text-lg text-gray-600 mt-6">
                Whether you&apos;re bringing a project across the finish line &mdash; or don&apos;t know where to start &mdash; let&apos;s talk about how my background in logistics, coordination, and software development can support your organization&apos;s goals.
              </p>
              <div className="mt-6 text-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-blue-600 hover:underline text-base font-medium"
                >
                  Get in touch →
                </button>
              </div>
              <SocialLinks />
            </div>
            <figure>
              <img src="/images/the-great-tilt.jpg"/>
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                The Great Tilt, Acrylic on board, 20 x 26 inches
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
  )
}