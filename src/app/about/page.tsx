import Section from "@/components/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
     <Section title="About" subtitle="A quick intro and background.">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="flex flex-col justify-start h-full space-y-4">
          <p>
            I'm Sirajudheen, a software developer focused on building fast,
            reliable, and accessible web applications. I love turning ideas
            into polished products using TypeScript, React, and Next.js.
          </p>
          <p>
            My work blends thoughtful UX with solid engineering, with a focus on
            performance, maintainability, and scalability.
          </p>
        </div>

        <div className="relative w-[300px] h-[400px] overflow-hidden group  shadow-lg">
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
