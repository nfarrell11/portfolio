import Image from "next/image"
export default function CertificationBadge() {
  return (
    <figure className="flex flex-col items-center py-4">
              <a
                href="https://www.credly.com/badges/a2587c6b-b36e-4a53-a86b-adc5df2db60d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/psm-badge.png"
                  alt="Scrum.org Professional Scrum Master I"
                  width={150}
                  height={150}
                />
              </a>
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                Professional Scrum Master&trade; I — Scrum.org
              </figcaption>
            </figure>
  )
}