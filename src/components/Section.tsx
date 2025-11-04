import { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-0 sm:py-0">
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 opacity-80 text-sm sm:text-base">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}


