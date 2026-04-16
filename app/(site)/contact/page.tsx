import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { MaterialSymbol } from "@/components/MaterialSymbol";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Reach out to collaborate, build something new, or say hello to the crew — Nala, Mina, and Flair.",
};

const CREW_SIDEBAR = [
  { name: "Mina", src: "/MinaCrew.png", alt: "Mina, happiness director" },
  { name: "Nala", src: "/NalaCrew.png", alt: "Nala, senior QA lead" },
  { name: "Flair", src: "/FlairCrew.png", alt: "Flair, junior debugger" },
] as const;

const LINKEDIN = "https://www.linkedin.com/in/gia-bao-danny-nguyen/";
const GITHUB = "https://github.com/DannyNguyenCode";

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.04)]";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-24 selection:bg-primary-container selection:text-on-primary-container md:px-8 md:py-24 md:pt-28 lg:pt-32">
      <header className="mb-16 max-w-3xl md:mb-24">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <MaterialSymbol name="mail" className="text-base text-primary" filled />
          Connect
        </div>
        <h1 className="mb-8 font-headline text-5xl font-extrabold leading-tight tracking-tighter text-on-surface md:text-7xl">
          Connect with the Hearth
        </h1>
        <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
          Whether you&apos;re looking to build a new digital home, collaborate on
          a technical masterpiece, or just want to say hi to the crew (Nala,
          Mina, and Flair), I&apos;d love to hear from you.
        </p>
      </header>

      <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
        <div className="flex-1">
          <div
            className={`rounded-xl bg-surface-container-lowest p-8 md:p-12 ${cardShadow}`}
          >
            <ContactForm />
          </div>
        </div>

        <aside className="w-full space-y-12 lg:w-[380px]">
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-high p-8">
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="size-3 shrink-0 animate-pulse rounded-full bg-green-500"
                  aria-hidden
                />
                <span className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Crew status
                </span>
              </div>
              <h2 className="mb-4 font-headline text-2xl font-bold leading-tight text-on-surface">
                Currently monitoring for new friends
              </h2>
              <div className="-space-x-4 mb-6 flex">
                {CREW_SIDEBAR.map((pet) => (
                  <div
                    key={pet.name}
                    className="relative size-16 shrink-0 overflow-hidden rounded-full border-4 border-surface-container-high bg-surface-dim"
                  >
                    <Image
                      src={pet.src}
                      alt={pet.alt}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm italic text-on-surface-variant">
                Nala, Mina, and Flair are ready for your message.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-headline text-xl font-bold text-on-surface">
              Other ways to connect
            </h2>
            <div className="space-y-4">
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 rounded-lg bg-surface-container-low p-4 transition-all hover:bg-surface-bright"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <MaterialSymbol name="mail" />
                </div>
                <div>
                  <div className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Email
                  </div>
                  <div className="font-medium text-on-surface">{CONTACT_EMAIL}</div>
                </div>
              </Link>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg bg-surface-container-low p-4 transition-all hover:bg-surface-bright"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <MaterialSymbol name="link" />
                </div>
                <div>
                  <div className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    LinkedIn
                  </div>
                  <div className="font-medium text-on-surface">
                    Gia Bao (Danny) Nguyen
                  </div>
                </div>
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg bg-surface-container-low p-4 transition-all hover:bg-surface-bright"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                  <MaterialSymbol name="code" />
                </div>
                <div>
                  <div className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    GitHub
                  </div>
                  <div className="font-medium text-on-surface">DannyNguyenCode</div>
                </div>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
