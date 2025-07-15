"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Image from "next/image"

const carouselImages = [
  {
    src: "/images/generative-field-a.jpg",
    title: "Generative Field III",
    year: "2013",
    medium: "Ink on Paper",
    dimensions: "26 x 40 inches",
  },
  {
    src: "/images/generative-field-b.jpg",
    title: "Generative Field IV",
    year: "2013",
    medium: "Ink on Paper",
    dimensions: "26 x 40 inches",
  },
  {
    src: "/images/generative-field-c.jpg",
    title: "Generative Field VI",
    year: "2013",
    medium: "Ink on Paper",
    dimensions: "26 x 40 inches",
  },
  {
    src: "/images/generative-field-d.jpg",
    title: "Generative Field VII",
    year: "2013",
    medium: "Ink on Paper",
    dimensions: "26 x 40 inches",
  },
  {
    src: "/images/generative-field-e.jpg",
    title: "Generative Field VIII",
    year: "2013",
    medium: "Ink on Paper",
    dimensions: "26 x 40 inches",
  },
]

export default function Gallery() {
  return (
      <section className="relative pt-16 px-4 sm:px-6 lg:px-8" id="gallery">
        <Carousel className="h-full w-full overflow-hidden" opts={{ loop: true }}>
          <CarouselContent className="flex snap-x snap-mandatory">
            {carouselImages.map(({ src, title, medium, dimensions }, index) => (
              <CarouselItem
                key={index}
                className="basis-[70%] sm:basis-[60%] md:basis-[45%] lg:basis-[33%] px-[15vw] sm:px-4 snap-center"
              >
                <div className="relative w-full h-[85vh] p-2">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-contain rounded"
                  />
                </div>

                <p className="text-center text-xs text-gray-700 mt-2">
                  {title}, {medium}, {dimensions}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>
  )
}