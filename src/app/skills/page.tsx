import Section from "@/components/Section";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "REST APIs",
  "Tailwind CSS", "Git", "CI/CD", "PostgreSQL", "MongoDB", "Docker",
];

export default function SkillsPage() {
  return (
    <Section title="Skills" subtitle="Technologies I use to build products.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}

 