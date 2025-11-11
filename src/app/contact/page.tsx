"use client";

import emailjs from "@emailjs/browser";
import Section from "@/components/Section";
import React from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isDownloading, setIsDownloading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      await emailjs.sendForm(
        "service_fjigmzh",
        "template_c5u7om8",
        e.currentTarget,
        "buurOf4XoiuKOQIfy"
      );
      setMessage("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 10));
      const link = document.createElement("a");
      link.href = "/siraj-software-developer1.pdf";
      link.download = "SIRAJUDHEEN_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => {
        setIsDownloading(false);
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section
      title="Contact Me"
      subtitle="Let's build something great together."
    >
      <div className="grid  grid-cols-1 lg:grid-cols-12  mt-10 md:mt-20 md:grid-cols-2 h-full w-full gap-20">
        <div className="md:col-span-7 w-full">
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/your-id"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <input
                  name="name"
                  required
                  className="mt-1 w-full border-0 border-b border-black/30 dark:border-white/30 
             bg-transparent px-0 py-2 outline-none 
             focus:border-b-2  transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full border-0 border-b border-black/30 dark:border-white/30 
             bg-transparent px-0 py-2 outline-none 
             focus:border-b-2  transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <textarea
              name="message"
              required
              rows={1}
              className="mt-1 w-full border-0 border-b border-black/30 dark:border-white/30 
             bg-transparent px-0 py-2 outline-none 
             focus:border-b-2  transition-colors duration-300"
              placeholder="Message"
            />
            <button
              className="bg-black cursor-pointer text-white px-2 p-1"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>{" "}
          </form>
          <div className="text-green-500">
            {message && <p className="mt-4">{message}</p>}
          </div>
        </div>
        <div className="w-full md:col-span-5 h-full items-center flex flex-col justify-center space-y-5">
          <div className=" border px-4 py-2 items-center flex gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M18 7.373V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.746 4.558a.5.5 0 0 0 .508 0zM15.5 4a2.5 2.5 0 0 1 2.485 2.223L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4z"
              />
            </svg>
            <div>
              <a className="mt-2" href="mailto:hello@example.com">
                ungungalsiraj@gmail.com
              </a>
            </div>
          </div>
          <div className=" border px-4 py-2 items-center flex gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 16.42v3.536a1 1 0 0 1-.93.998Q19.415 21 19 21C10.163 21 3 13.837 3 5q0-.414.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45q.034.344.064.552A13.9 13.9 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.05 13.05 0 0 0 6.844 6.844l1.54-2.154a.46.46 0 0 1 .573-.149a13.9 13.9 0 0 0 4 1.205q.208.03.55.064a.5.5 0 0 1 .449.498"
              />
            </svg>
            <p>89439880469</p>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="border cursor-pointer px-4 py-2 items-center bg-black  text-white  justify-center flex gap-2 w-full"
          >
            {isDownloading ? (
              <>
                {/* Loading Spinner */}
                <svg
                  className="animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <div>
                  <p>Downloading...</p>
                </div>
              </>
            ) : (
              <>
                {/* Download Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m3 14h8v-2H8zm8-7h-2.5V7h-3v3H8l4 4z"
                  />
                </svg>
                <div>
                  <p>Download CV</p>
                </div>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-20">
        <hr className="p-2 border-gray-400" />
        <div className="flex items-center justify-between md:justify-start gap-10 min-h-[80px]">
          <h1 className="font-bold text-xl md:text-3xl">Follow Me</h1>
          <div className="flex gap-4 text-sm justify-center">
            <a
              className="underline"
              href="https://github.com/siraj0155"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <g clipPath="url(#SVGXv8lpc2Y)">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                      clipRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="SVGXv8lpc2Y">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </a>
            <a
              className="underline"
              href="https://www.linkedin.com/in/sirajudheen-u/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5M7 17v-7" />
                  <path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" />
                </g>
              </svg>
            </a>
            <a
              className="underline"
              href="https://www.instagram.com/__sira_j?igsh=NWc3YXY1MW82dmRr"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
