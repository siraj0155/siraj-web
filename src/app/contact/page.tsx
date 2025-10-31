import Button from "@/components/Button";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Let's build something great together.">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <form
            action="https://formspree.io/f/your-id"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="text-sm">
                Name
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-black/15 dark:border-white/15 bg-transparent px-3 py-2"
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border border-black/15 dark:border-white/15 bg-transparent px-3 py-2"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="text-sm block">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="mt-1 w-full rounded-md border border-black/15 dark:border-white/15 bg-transparent px-3 py-2"
                placeholder="Tell me about your project..."
              />
            </label>
            <Button type="submit">Send message</Button>
          </form>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
            <p className="text-sm opacity-80">Prefer email?</p>
            <a className="mt-2 inline-block underline" href="mailto:hello@example.com">hello@example.com</a>
            <div className="mt-4 flex gap-4 text-sm">
              <a className="underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

 