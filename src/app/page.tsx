"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="h-full flex relative px-20">
        <div className="flex flex-col cursor-pointer gap-2 absolute justify-center h-full text-xl">
          <p>About Me</p>
          <p>Works</p>
          <p>Contact</p>
        </div>
        <div className="absolute top-10 opacity-0 animate-slideIn-text ">
          <p className="text-4xl stroked-text opacity-0 animate-slideIn-text">
            SIRAJ_WEB
          </p>
        </div>
        <div className="flex w-full items-center justify-center h-full ">
          <TypeAnimation
            sequence={["Software Developer", 2000, "", 500]}
            wrapper="h1"
            speed={50}
            className="text-7xl font-semibold inline-block opacity-0 animate-slideIn"
            repeat={Infinity}
            cursor={false}
          />
          <Image
            src="/home-image.jpeg"
            alt="Waving Hand"
            width={300}
            height={100}
            className="ml-4 opacity-0 animate-slideIn-image"
          />
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1,2].map((i) => (
            <div key={i} className="border border-black/10 dark:border-white/10 rounded-lg p-5">
              <h3 className="font-medium">Project {i}</h3>
              <p className="mt-2 text-sm opacity-80">Short description about the project and impact.</p>
              <div className="mt-4">
                <Button variant="outline" href="/projects">View details</Button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}
