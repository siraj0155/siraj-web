import Section from "@/components/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Section title="About" subtitle="A quick intro and background.">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center  w-full gap-10 md:gap-20 lg:gap-40">
        <div className="flex flex-col justify-start h-full space-y-4">
          <div className="bg-black opacity-30 transform skew-y-[-2deg] my-8 text-center py-6 px-5">
            <p className="font-caveat text-gray-400 text-6xl">Hey there!</p>
          </div>
          <p className="text-medium">
            I’m Sirajudheen, a software developer with over 2+ years of experience building elegant, high-performance web applications. I specialize in React and Next.js, blending creative design with solid engineering to craft fast, reliable, and user-friendly digital experiences.

            I’m passionate about performance, accessibility, and clean architecture, and I care deeply about creating products that not only look great but also feel effortless to use. My work combines thoughtful UX with scalable, maintainable code, ensuring every project stands the test of time.

          </p>
          <p>
            My work blends thoughtful UX with solid engineering, with a focus on
            performance, maintainability, and scalability.
          </p>
        </div>

        <div className="relative w-[300px]  h-[400px] overflow-hidden group  shadow-lg">
          <Image
            src="/image.png"
            alt="Profile"
            fill
            className="object-cover transition-transform duration-700 group-hover:-translate-y-full"
          />
          <Image
            src="/home-image.jpeg"
            alt="Profile Hover"
            fill
            className="object-cover translate-y-full transition-transform duration-700 group-hover:translate-y-0"
          />
        </div>
      </div>
    </Section>
  );
}
