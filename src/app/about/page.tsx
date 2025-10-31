import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About" subtitle="A quick intro and background.">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 space-y-4">
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
        <div className="md:col-span-5">
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
            <h3 className="font-medium">Highlights</h3>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
              <li>Built production Next.js apps</li>
              <li>Shipped CI/CD pipelines and Dockerized services</li>
              <li>Experience with PostgreSQL and MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-medium">Recent Timeline</h3>
        <div className="mt-4 space-y-3 text-sm">
          <div className="rounded-md border border-black/10 dark:border-white/10 p-3">
            <p className="font-medium">2024–2025</p>
            <p className="opacity-80">Freelance projects, focusing on full‑stack Next.js.</p>
          </div>
          <div className="rounded-md border border-black/10 dark:border-white/10 p-3">
            <p className="font-medium">2023</p>
            <p className="opacity-80">Built internal tools with React, Node.js, and PostgreSQL.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}


