import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Professional Journey",
  description:
    "Building digital homes with the heart of a caregiver — employment history and skills in action.",
};

const EMPLOYMENT_HERO = "/MinaEmploymentHero.png";
const SUPPORT_CARD_BG = "/MinaEmploymentSupport.png";

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

export default function EmploymentPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-28 lg:pt-32">
      <header className="mb-20 text-center md:text-left">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-7xl">
              The Professional Journey
            </h1>
            <p className="text-xl font-medium leading-relaxed text-on-surface-variant md:text-2xl">
              Building digital homes with the heart of a caregiver. How empathy
              from customer care fuels better development and more supportive
              software.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div
              className={`h-64 w-64 rotate-3 overflow-hidden rounded-xl bg-surface-container-high p-4 shadow-2xl`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={EMPLOYMENT_HERO}
                  alt="Mina in a warm, cozy setting beside the workspace"
                  fill
                  className="object-cover"
                  sizes="16rem"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -rotate-6 rounded-full bg-primary px-6 py-3 font-headline font-bold text-on-primary shadow-lg">
              Stay Grounded
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <section className="space-y-16 lg:col-span-8">
          {/* Junior Developer (Freelance) */}
          <article>
            <div
              className={`rounded-xl bg-surface-container p-8 transition-colors duration-500 hover:bg-surface-bright md:p-12 ${cardShadow}`}
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                    2023 – Present
                  </span>
                  <h3 className="mt-1 font-headline text-3xl font-bold text-on-surface">
                    Junior Developer (Freelance)
                  </h3>
                  <p className="text-lg font-semibold text-secondary-dim">
                    The Digital Hearth / Freelance
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2">
                  <Icon name="terminal" className="text-sm! text-primary" />
                  <span className="font-label text-sm font-semibold text-on-surface-variant">
                    Current Focus
                  </span>
                </div>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-on-surface">
                Transitioning into professional web development by building
                custom, accessible digital solutions. Currently focused on
                architecting a personal brand identity and developing a
                comprehensive portfolio for a family member.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-outline-variant/10 bg-background p-4">
                  <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                    <Icon name="architecture" />
                    Digital Architect
                  </h4>
                  <p className="text-sm leading-snug text-on-surface-variant">
                    Crafting clean, responsive React components with a focus on
                    heirloom-quality design and user empathy.
                  </p>
                </div>
                <div className="rounded-lg border border-outline-variant/10 bg-background p-4">
                  <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                    <Icon name="family_history" />
                    Family Support
                  </h4>
                  <p className="text-sm leading-snug text-on-surface-variant">
                    Providing technical foundations for family-owned projects,
                    ensuring their digital presence is as warm and inviting as
                    their values.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Benefits Customer Care Representative */}
          <article>
            <div
              className={`rounded-xl bg-surface-container-lowest p-8 transition-colors duration-500 hover:bg-surface-bright md:p-12 ${cardShadow}`}
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                    Aug 2025 - Present
                  </span>
                  <h3 className="mt-1 font-headline text-3xl font-bold text-primary">
                    Benefits Customer Care Representative
                  </h3>
                  <p className="text-lg font-semibold text-secondary">
                    The Digital Hearth / Healthcare Solutions
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-surface-container px-4 py-2">
                  <Icon name="history_edu" className="text-sm! text-primary" />
                  <span className="font-label text-sm font-semibold text-on-surface-variant">
                    Dual Path (Current)
                  </span>
                </div>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-on-surface">
                Focusing on deep empathy and high-level education while
                resolving complex benefit plan inquiries. Consistently
                maintaining a{" "}
                <strong>90+/100 CSAT score</strong> by turning frustrating
                bureaucratic obstacles into clear, supportive pathways for
                members.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-outline-variant/10 bg-background p-4">
                  <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                    <Icon name="volunteer_activism" />
                    Empathy First
                  </h4>
                  <p className="text-sm leading-snug text-on-surface-variant">
                    Translating dense medical policies into human-centric
                    solutions for stressed callers.
                  </p>
                </div>
                <div className="rounded-lg border border-outline-variant/10 bg-background p-4">
                  <h4 className="mb-2 flex items-center gap-2 font-bold text-primary">
                    <Icon name="psychology" />
                    Complex Resolution
                  </h4>
                  <p className="text-sm leading-snug text-on-surface-variant">
                    Deconstructing multi-layered plan conflicts to find the most
                    favorable outcomes for users.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Junior Developer at Shipvista */}
          <article>
            <div className="rounded-xl bg-surface-container p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                    May 2021 - Feb 2022
                  </span>
                  <h3 className="mt-1 font-headline text-3xl font-bold text-on-surface">
                    Junior Developer
                  </h3>
                  <p className="text-lg font-semibold text-secondary-dim">
                    Shipvista.com
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2">
                  <Icon name="pets" className="text-sm! text-primary" />
                  <span className="font-label text-sm font-semibold text-on-surface-variant">
                    Supported by Flair
                  </span>
                </div>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-on-surface">
                Modernized logistics infrastructure by migrating legacy .NET
                systems to React. Focused on the intersection of payments and
                real-time data to improve the merchant experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="payments" className="text-primary" />
                  <div>
                    <h5 className="font-bold text-on-surface">
                      Seamless Transactions
                    </h5>
                    <p className="text-sm text-on-surface-variant">
                      Implemented Stripe integration to streamline billing cycles
                      for high-volume logistics clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="dynamic_feed" className="text-primary" />
                  <div>
                    <h5 className="font-bold text-on-surface">
                      Real-Time Logistics
                    </h5>
                    <p className="text-sm text-on-surface-variant">
                      Utilized WebSockets to provide instant UPS shipping rates,
                      reducing user wait times and bounce rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* IT Service Desk — Seneca */}
          <article>
            <div
              className={`rounded-xl bg-surface-container-lowest p-8 md:p-12 ${cardShadow}`}
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                    Jan 2019 - Aug 2019
                  </span>
                  <h3 className="mt-1 font-headline text-3xl font-bold text-primary">
                    IT Service Desk
                  </h3>
                  <p className="text-lg font-semibold text-secondary">
                    Seneca College
                  </p>
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-on-surface">
                Provided Tier 1 technical support for faculty and students.
                Managed hardware lifecycle and collaborative troubleshooting
                environments.
              </p>
              <ul className="grid grid-cols-1 gap-3 text-sm text-on-surface-variant md:grid-cols-2">
                {(
                  [
                    ["inventory_2", "Inventory Tracking"],
                    ["group", "Zoho Collaboration"],
                    ["support_agent", "Tier 1 Technical Support"],
                    ["laptop_mac", "Hardware Deployment"],
                  ] as const
                ).map(([icon, label]) => (
                  <li key={label} className="flex items-center gap-2">
                    <Icon name={icon} className="text-xs! text-primary" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Tim Hortons */}
          <article>
            <div className="rounded-xl bg-surface-container p-8 md:p-12">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">
                    Jun 2017 - Dec 2017
                  </span>
                  <h3 className="mt-1 font-headline text-3xl font-bold text-on-surface">
                    Team Member
                  </h3>
                  <p className="text-lg font-semibold text-secondary-dim">
                    Tim Hortons
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2">
                  <Icon name="pets" className="text-sm! text-primary" />
                  <span className="font-label text-sm font-semibold text-on-surface-variant">
                    Supported by Mina
                  </span>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-on-surface">
                Developed core &quot;soft skills&quot; in a high-volume,
                fast-paced service environment. Mastered the art of active
                listening to ensure accuracy under pressure—a skill that now
                translates to gathering precise software requirements.
              </p>
            </div>
          </article>
        </section>

        <aside className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <div
              className={`space-y-6 rounded-xl bg-surface-container-high p-8`}
            >
              <h4 className="font-headline text-2xl font-bold text-primary">
                Skills in Action
              </h4>
              <div className="space-y-4">
                {(
                  [
                    {
                      title: "React & Real-Time",
                      badge: "Pro",
                      width: "90%",
                      quote:
                        "Building real-time Web Socket dashboards for instant logistics updates.",
                    },
                    {
                      title: "Service-Driven API",
                      badge: "Core",
                      width: "85%",
                      quote:
                        "Integrating Stripe and UPS APIs with a focus on user-facing error handling.",
                    },
                    {
                      title: "User Advocacy",
                      badge: "Expert",
                      width: "95%",
                      quote:
                        "Leveraging 90+ CSAT care experience to advocate for clearer UI patterns.",
                    },
                  ] as const
                ).map((row) => (
                  <div
                    key={row.title}
                    className="rounded-lg bg-surface-container-lowest p-6"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-on-surface">{row.title}</span>
                      <span className="rounded-full bg-primary-container/20 px-2 py-1 text-xs font-bold text-primary">
                        {row.badge}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                      <div
                        className="h-full bg-linear-to-r from-secondary to-secondary-fixed-dim"
                        style={{ width: row.width }}
                      />
                    </div>
                    <p className="mt-3 text-xs italic text-on-surface-variant">
                      &ldquo;{row.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-outline-variant/30 pt-4 text-center">
                <p className="mb-4 text-sm font-medium text-on-surface-variant">
                  Looking for a developer who speaks &apos;Human&apos;?
                </p>
                <Link
                  href="https://niceguyservices.vercel.app/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-primary py-3 text-center font-headline font-bold text-on-primary transition-colors hover:bg-primary-dim"
                >
                  Let&apos;s Talk Shop
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border-4 border-surface-container-high bg-surface p-6 group">
              <div className="absolute inset-0">
                <Image
                  src={SUPPORT_CARD_BG}
                  alt=""
                  fill
                  className="object-cover opacity-10 transition-opacity duration-700 group-hover:opacity-20"
                  sizes="(min-width: 1024px) 320px, 100vw"
                  aria-hidden
                />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container">
                  <Icon
                    name="favorite"
                    className="text-on-primary-container text-xl!"
                  />
                </div>
                <h5 className="font-headline font-bold text-primary">
                  The Support Crew
                </h5>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  Nala, Mina (The Thinker), and Flair (The Enforcer) keep the
                  digital hearth warm while I&apos;m deep in the code.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
