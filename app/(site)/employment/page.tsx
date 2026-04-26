import type { Metadata } from "next";
import Image from "next/image";

import { MaterialSymbol } from "@/components/MaterialSymbol";

export const metadata: Metadata = {
  title: "The Professional Journey",
  description:
    "A professional history built on empathy, technical precision, and digital spaces that feel like home.",
};

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

export default function EmploymentPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 md:px-8 md:pt-28 lg:pt-32">
      <header className="mb-16 text-center md:mb-20 md:text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          <MaterialSymbol name="work" className="text-base text-primary" filled />
          Experience
        </div>
        <h1 className="mb-6 font-headline text-4xl font-extrabold leading-none tracking-tight text-on-surface sm:text-5xl md:text-6xl lg:text-7xl">
          The <span className="text-primary">Professional <br /> Journey </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant md:mx-0 md:text-xl">
          A professional history built on empathy, technical precision, and a
          commitment to nurturing digital spaces that feel like home.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12">
        {/* Freelance */}
        <section
          className={`rounded-xl bg-surface-container-lowest p-6 transition-all hover:bg-surface-bright sm:p-8 md:col-span-8 md:p-10 ${cardShadow}`}
        >
          <div className="space-y-4">
            <h2 className="font-headline text-2xl font-bold text-on-surface sm:text-3xl">
              Website Developer (Freelance)
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="min-w-0 space-y-1">
                <h3 className="font-headline text-lg font-semibold text-secondary sm:text-xl">
                  Nice Guy Web Design
                </h3>
                <p className="font-label text-xs font-bold tracking-widest text-on-surface-variant uppercase">
                  2026 – Present
                </p>
              </div>
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-surface-container-high md:h-32 md:w-32 lg:h-36 lg:w-36">
                <Image
                  src="/journeyFlair.png"
                  alt="Warm workspace with Mina nearby"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 144px, (min-width: 768px) 128px, 80px"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MaterialSymbol
                  name="verified"
                  className="mt-0.5 shrink-0 text-primary-fixed-dim"
                />
                <p className="text-base leading-relaxed text-on-surface sm:text-lg">
                  Building custom, accessible digital solutions and a cohesive
                  personal brand—prioritizing warm, editorial-quality layouts for
                  family-centered portfolios.
                </p>
              </li>
              <li className="flex gap-4">
                <MaterialSymbol
                  name="verified"
                  className="mt-0.5 shrink-0 text-primary-fixed-dim"
                />
                <p className="text-base leading-relaxed text-on-surface sm:text-lg">
                  Applying modern React patterns and a Web Design Lounge philosophy:
                  interfaces that feel human, intentional, and easy to maintain.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="flex flex-col justify-between rounded-xl bg-surface-container-low p-6 sm:p-8 md:col-span-4">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              <MaterialSymbol name="volunteer_activism" filled />
            </div>
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              Benefits Customer Care
            </h2>
            <h3 className="font-headline text-base font-medium text-on-surface-variant sm:text-lg">
              Healthcare Solutions
            </h3>
            <p className="text-sm text-stone-500">Aug 2025 – Present</p>
          </div>
          <div className="mt-8 space-y-4 border-l-2 border-primary/20 pl-4">
            <p className="text-sm leading-relaxed italic text-on-surface-variant">
              &ldquo;Delivering clear education on complex benefit plans—
              consistently earning 90+ CSAT by turning frustration into
              workable paths for members.&rdquo;
            </p>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
              <div className="h-full w-[95%] rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim" />
            </div>
            <span className="font-label text-[10px] font-bold tracking-tighter text-on-surface-variant uppercase">
              Efficiency &amp; satisfaction rating
            </span>
          </div>
        </section>

        {/* Shipvista */}
        <section className="rounded-xl bg-surface-container-high p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 md:col-span-6">
          <div className="mb-6 flex gap-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary text-on-primary">
              <MaterialSymbol
                name="code"
                className="text-lg! leading-none"
              />
            </div>
            <div>
              <h2 className="font-headline text-xl font-bold sm:text-2xl">
                Junior Developer
              </h2>
              <p className="font-medium text-primary-dim">
                Shipvista.com | May 2021 – Feb 2022
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-surface-container-lowest p-4">
              <h4 className="mb-2 font-headline font-bold text-secondary">
                React migration
              </h4>
              <p className="text-sm text-on-surface-variant">
                Migrated core legacy .NET areas to React, improving maintainability
                and the day-to-day merchant experience.
              </p>
            </div>
            <div className="rounded-lg bg-surface-container-lowest p-4">
              <h4 className="mb-2 font-headline font-bold text-secondary">
                Stripe &amp; WebSockets
              </h4>
              <p className="text-sm text-on-surface-variant">
                Integrated real-time shipping updates and dependable payment flows
                for high-volume logistics workflows.
              </p>
            </div>
          </div>
        </section>

        {/* IT Service Desk */}
        <section className="rounded-xl border border-outline-variant/10 bg-surface p-6 sm:p-8 md:col-span-3">
          <MaterialSymbol name="support_agent" className="mb-4 text-primary" />
          <h2 className="mb-2 font-headline text-lg font-bold leading-tight text-on-surface sm:text-xl">
            IT Service Desk
          </h2>
          <p className="mb-6 text-sm text-on-surface-variant">
            Seneca College | Jan 2019 – Aug 2019
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MaterialSymbol
                name="circle"
                className="mt-1 shrink-0 text-xs text-primary"
              />
              <p className="text-xs text-on-surface-variant">
                Tier 1 support for faculty and students, with a focus on clear
                first-contact resolution.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <MaterialSymbol
                name="circle"
                className="mt-1 shrink-0 text-xs text-primary"
              />
              <p className="text-xs text-on-surface-variant">
                Hardware lifecycle, inventory awareness, and collaborative
                troubleshooting alongside campus teams.
              </p>
            </div>
          </div>
        </section>

        {/* Tim Hortons */}
        <section className="flex flex-col justify-center rounded-xl bg-tertiary-container p-6 text-center sm:p-8 md:col-span-3">
          <div className="mb-4 flex justify-center">
            <MaterialSymbol
              name="coffee"
              className="text-4xl text-on-tertiary-container"
            />
          </div>
          <h2 className="font-headline text-lg font-bold text-on-tertiary-container">
            Team Member
          </h2>
          <p className="mb-4 font-label text-xs italic text-on-tertiary-fixed-variant">
            Tim Hortons | Jun 2017 – Dec 2017
          </p>
          <p className="text-sm text-on-tertiary-container/80">
            Honed the art of{" "}
            <span className="font-bold">active listening</span> and high-speed
            organization during peak service—skills that now shape how I gather
            requirements and ship under pressure.
          </p>
        </section>
      </div>

      {/* Inspired */}
      <section className="mt-24 md:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h2 className="mb-6 font-headline text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Inspired by Nala, Mina, and Flair
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:mx-0">
              My approach to development is informed by the qualities my pets
              embody: Nala&apos;s unwavering loyalty to quality, Mina&apos;s
              agile problem-solving, and Flair&apos;s vibrant energy. Every line
              of code is written with the warmth of a home in mind.
            </p>
            <div className="mb-10 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-full bg-surface-container px-4 py-2 text-sm font-bold text-primary">
                Loyal Quality
                <span className="sr-only"> (Nala)</span>
              </span>
              <span className="rounded-full bg-surface-container px-4 py-2 text-sm font-bold text-primary">
                Agile Solutions
                <span className="sr-only"> (Mina)</span>
              </span>
              <span className="rounded-full bg-surface-container px-4 py-2 text-sm font-bold text-primary">
                Vibrant UX
                <span className="sr-only"> (Flair)</span>
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-lg pb-8 pl-4 pr-2 pt-6 sm:pb-10 sm:pl-6 md:mx-0 md:max-w-none">
              <div className="relative h-72 w-full overflow-hidden rounded-xl bg-surface-container-high shadow-2xl rotate-2 sm:h-80 md:h-96">
                <Image
                  src="/MinaEmploymentHero.png"
                  alt="Mina in a warm, cozy setting beside the workspace"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, min(100vw, 28rem)"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 h-36 w-36 overflow-hidden rounded-xl border-8 border-background shadow-xl -rotate-6 sm:-bottom-6 sm:-left-4 sm:h-44 sm:w-44 md:h-48 md:w-48">
                <Image
                  src="/HomepageNalainspiration.png"
                  alt="Nala, inspiration for loyalty and calm focus"
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-1 h-32 w-32 overflow-hidden rounded-xl border-8 border-background shadow-xl rotate-3 sm:-right-3 sm:h-36 sm:w-36 md:h-40 md:w-40">
                <Image
                  src="/FlairEmployment.png"
                  alt="Flair, inspiration for playful energy and momentum"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:mt-14 md:text-left">
          <a
            href="https://niceguyservices.vercel.app/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-headline font-bold text-on-primary transition-colors hover:bg-primary-dim"
          >
            Let&apos;s Talk Shop
          </a>
        </div>
      </section>
    </main>
  );
}
