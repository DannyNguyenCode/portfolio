import Image from "next/image";
import Link from "next/link";

const CREW = [
  { name: "Nala", src: "/NalaCrew.png", alt: "Nala" },
  { name: "Mina", src: "/MinaCrew.png", alt: "Mina" },
  { name: "Flair", src: "/FlairCrew.png", alt: "Flair" },
] as const;

const FOOTER_NAV = [
  { href: "/", label: "The Web Design Lounge" },
  { href: "/skills", label: "The Craftmanship" },
  { href: "/employment", label: "Professional Journey" },
  { href: "/projects", label: "Technical Creations" },
  { href: "/education", label: "Academic Foundation" },
  { href: "/contact", label: "Connect" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full rounded-t-xl bg-surface-container px-8 py-16 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <div className="mb-6 font-headline text-2xl font-bold tracking-tighter text-primary">
            The Web Design Lounge
          </div>
          <p className="mb-8 text-sm leading-relaxed text-stone-600">
            Designing interfaces that feel like home. Built with love for clean
            code and soft lighting.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {CREW.map((pet) => (
              <div key={pet.name} className="group/crew relative">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary-container transition-transform duration-300 group-hover/crew:scale-110">
                  <Image
                    src={pet.src}
                    alt={pet.alt}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-on-surface px-2 py-1 text-[10px] text-surface opacity-0 transition-opacity group-hover/crew:opacity-100">
                  {pet.name}
                </span>
              </div>
            ))}
            <span className="ml-2 text-xs font-medium text-stone-500">
              The Support Crew
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="mb-6 font-headline font-bold text-primary">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm text-stone-600">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="underline-offset-4 decoration-amber-500/30 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-headline font-bold text-primary">Social</h3>
            <ul className="space-y-4 text-sm text-stone-600">
              <li>
                <a
                  href="https://www.linkedin.com/in/gia-bao-danny-nguyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 decoration-amber-500/30 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DannyNguyenCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 decoration-amber-500/30 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-6 border-t border-primary/10 pt-8 text-xs text-stone-500 md:flex-row md:items-center">
        <div className="text-left">
          © {new Date().getFullYear()} The Web Design Lounge. Inspired by Nala,
          Mina, and Flair.
        </div>
        <div className="flex w-fit flex-col items-start gap-2">
          <span className="font-label text-[10px] font-bold uppercase tracking-widest text-stone-400">
            Powered by
          </span>
          <a
            href="https://niceguyservices.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-stone-600 transition-colors hover:bg-surface-bright hover:text-primary"
          >
            <Image
              src="/blue_logo_test.png"
              alt=""
              width={120}
              height={40}
              className="h-8 w-auto max-w-28 object-contain object-left"
            />
            <span className="font-headline text-sm font-semibold tracking-tight">
              NiceGuyServices
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
