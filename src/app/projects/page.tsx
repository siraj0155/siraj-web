"use client";
import Image from "next/image";
import { Button } from "@heroui/react";
import Section from "@/components/Section";
import React from "react";

const slides = [
  {
    id: 1,
    src: "/home-image.jpeg",
    title: "Discover Restaurants near you",
    link: "https://example1.com",
  },
  {
    id: 2,
    src: "/home-image.jpeg",
    title: "Delicious & Best Food",
    link: "https://example2.com",
  },
  {
    id: 3,
    src: "/home-image.jpeg",
    title: "Find Your Dream Car",
    link: "https://example3.com",
  },
  {
    id: 4,
    src: "/home-image.jpeg",
    title: "Find Your Dream Car",
    link: "https://example4.com",
  },
  {
    id: 5,
    src: "/home-image.jpeg",
    title: "Find Your Dream Car",
    link: "https://example5.com",
  },
  {
    id: 6,
    src: "/home-image.jpeg",
    title: "Find Your Dream Car",
    link: "https://example6.com",
  },
];

export default function ProjectsPage() {
  const [current, setCurrent] = React.useState(0);
  const [activeSlide, setActiveSlide] = React.useState<number| null>(null);

  const [visibleSlides, setVisibleSlides] = React.useState(3);
  React.useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current < slides.length - visibleSlides) setCurrent(current + 1);
  };

  const handleTouch = (id:number) => {
    setActiveSlide((prev) => (prev === id ? null : id));
  };

  return (
    <Section title="Projects" subtitle="My Recent Works">
      <div className="w-full h-full flex mt-14 md:mt-16 justify-center items-center">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform ease-out duration-700"
            style={{
              transform: `translateX(-${(current * 100) / visibleSlides}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full md:min-w-1/3 flex justify-center items-center"
              >
                <div
                  className="relative group w-full md:w-96 md:aspect-[4/7] aspect-[5/7] shadow-lg rounded-lg overflow-hidden"
                  onTouchStart={() => handleTouch(slide.id)} 
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 bg-white/90 flex justify-center items-center transition-transform duration-500 ease-out
                      ${
                        activeSlide === slide.id
                          ? "translate-y-0"
                          : "translate-y-full group-hover:translate-y-0"
                      }`}
                  >
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-semibold text-base border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      onClick={(e) => e.stopPropagation()} 
                    >
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            onPress={prevSlide}
            color="default"
            size="sm"
            radius="full"
            variant="flat"
            className="absolute bg-white left-2 top-1/2 -translate-y-1/2 z-10"
            isIconOnly
            isDisabled={current === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.59 30.59 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.59 30.59 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
              />
            </svg>
          </Button>

          <Button
            onPress={nextSlide}
            size="sm"
            radius="full"
            variant="flat"
            className="absolute bg-white right-2 top-1/2 -translate-y-1/2 z-10"
            isIconOnly
            isDisabled={current >= slides.length - visibleSlides}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Section>
  );
}
