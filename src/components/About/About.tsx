"use client"
import { scrollToSection } from "@/lib/scroll";
import SocialLinks from "../SocialLinks";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2> */}

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
              <p className="text-lg text-gray-600">
                I&apos;m an art handler, exhibition preparator, and systems consultant working across Vancouver&apos;s cultural sector &mdash; currently splitting my time between full-cycle logistics for museum collections, gallery rigging and installation work, and an independent consulting practice. A decade with major institutions has taught me how to embrace change, meet deadlines under pressure, and build trust with clients from day one.
              </p>
              <p className="text-lg text-gray-600 mt-6">
                I also build software. I develop web applications that solve real-world problems for small teams and service-based industries, with an approach that emphasizes accessibility, responsive design, clean architecture, and customer-first thinking &mdash; always focused on tools that are intuitive to use, easy to maintain, and ready to scale.
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