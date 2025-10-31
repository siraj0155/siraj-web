export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="opacity-70">© {new Date().getFullYear()} Sirajudheen</p>
        <div className="flex gap-4 opacity-80">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:hello@example.com" className="hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
}


