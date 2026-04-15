import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full bg-surface-container px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-headline text-lg font-semibold text-primary">
            The Digital Hearth
          </span>
          <p className="font-body text-xs uppercase tracking-wider text-on-surface">
            © {new Date().getFullYear()} The Digital Hearth. Built with warmth
            and care.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-body text-xs uppercase tracking-wider">
          <Link
            href="https://www.linkedin.com/in/gia-bao-danny-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/DannyNguyenCode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
