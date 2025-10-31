import Button from "@/components/Button";
import Section from "@/components/Section";

const projects = [
  {
    title: "Project One",
    description: "A performant Next.js app with SSR and ISR.",
    href: "#",
  },
  {
    title: "Project Two",
    description: "Full‑stack app with auth, API routes, and PostgreSQL.",
    href: "#",
  },
  {
    title: "Project Three",
    description: "Component library and design system in React/Tailwind.",
    href: "#",
  },
];

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Selected work and experiments.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border border-black/10 dark:border-white/10 rounded-lg p-5">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-2 text-sm opacity-80">{p.description}</p>
            <div className="mt-4">
              <Button variant="outline" href={p.href}>View details</Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}


