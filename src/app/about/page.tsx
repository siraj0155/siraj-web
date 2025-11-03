import Section from "@/components/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Section title="About" subtitle="A quick intro and background.">
      <div className="grid grid-cols-2 ">
        <div >
          <p>
            I’m Sirajudheen, a software developer focused on building fast, reliable,
            and accessible web applications. I love turning ideas into polished
            products using TypeScript, React, and Next.js.
          </p>
          <p>
            My work blends thoughtful UX with solid engineering, with a focus on
            performance, maintainability, and scalability.
          </p>
        </div>
      
     
        <Image
          src="/image.png"
          alt="Waving Hand"
          width={300}
          height={100}
          className="ml-4 opacity-0 animate-slideIn-image"
        />

      </div>

     
    </Section>
  );
}


