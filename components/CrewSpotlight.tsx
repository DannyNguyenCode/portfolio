import type { ReactNode } from "react";
import Image from "next/image";

import { MaterialSymbol } from "@/components/MaterialSymbol";

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

export type CrewSpotlightFeature = {
  icon: string;
  title: string;
  description: string;
  /** Icon color; defaults to primary. */
  iconClassName?: string;
};

export type CrewSpotlightFloatingCard = {
  icon: string;
  label: string;
  value: string;
};

export type CrewSpotlightProps = {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  title: ReactNode;
  description: ReactNode;
  features: [CrewSpotlightFeature, CrewSpotlightFeature];
  floatingCard: CrewSpotlightFloatingCard;
};

export function CrewSpotlight({
  className = "",
  imageSrc,
  imageAlt,
  title,
  description,
  features,
  floatingCard,
}: CrewSpotlightProps) {
  const [leftFeature, rightFeature] = features;

  return (
    <section
      className={`rounded-xl border border-primary/10 bg-primary-container/10 p-8 ${cardShadow} ${className}`.trim()}
    >
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <div className="order-2 w-full lg:order-1 lg:w-1/2">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-label text-xs font-bold tracking-widest text-primary uppercase">
            <MaterialSymbol name="pets" className="text-sm" />
            Crew Spotlight
          </div>
          <h2 className="mb-8 font-headline text-4xl leading-tight font-extrabold tracking-tighter text-on-surface md:text-5xl">
            {title}
          </h2>
          <div className="mb-10 text-lg leading-relaxed text-on-surface-variant">
            {description}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-primary/10 bg-white/60 p-5 shadow-sm">
              <MaterialSymbol
                name={leftFeature.icon}
                className={`mb-3 ${leftFeature.iconClassName ?? "text-primary"}`}
              />
              <h3 className="mb-1 font-headline font-bold text-on-surface">
                {leftFeature.title}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {leftFeature.description}
              </p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-white/60 p-5 shadow-sm">
              <MaterialSymbol
                name={rightFeature.icon}
                className={`mb-3 ${rightFeature.iconClassName ?? "text-primary"}`}
              />
              <h3 className="mb-1 font-headline font-bold text-on-surface">
                {rightFeature.title}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {rightFeature.description}
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 w-full lg:order-2 lg:w-1/2">
          <div className="relative">
            <div className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-secondary-container/20 blur-3xl" />
            <div className="relative z-10 rotate-2 overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={960}
                height={720}
                className="aspect-4/3 w-full rounded-[2rem] object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="animate-bounce-slow absolute bottom-4 right-4 flex max-w-[min(100%,calc(100%-1.5rem))] items-center gap-2 rounded-xl bg-white/90 p-2 shadow-xl backdrop-blur-md sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 md:max-w-none md:gap-4 md:rounded-2xl md:p-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/20 md:size-10">
                  <MaterialSymbol
                    name={floatingCard.icon}
                    className="text-lg text-primary md:text-xl"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold tracking-wide text-primary-dim uppercase md:text-[10px]">
                    {floatingCard.label}
                  </p>
                  <p className="text-xs font-bold text-on-surface md:text-sm">
                    {floatingCard.value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const minaHabitatSpotlightPreset: Omit<CrewSpotlightProps, "className"> = {
  imageSrc: "/MinaCrew.png",
  imageAlt: "Mina in a warm, cozy setting beside the workspace",
  title: (
    <>
      Mina's{" "}
      Smart Play<span className="text-primary italic">Habitat</span>
    </>
  ),
  description: (
    <>
      As Happiness Director, Mina enforces a strict hourly<span className="font-bold text-primary-dim italic"> refresh protocol</span>. Her non-negotiable requirements for fresh air, optimal Vitamin D intake, and treat-based incentives ensure peak cognitive performance and sustained code quality throughout the day.
    </>
  ),
  features: [
    {
      icon: "sensors",
      title: "Motion Analytics",
      description:
        "Real-time heatmaps based on feline activity patterns.",
    },
    {
      icon: "cloud_sync",
      title: "Fluid Sync",
      description: "Sub-50ms latency for physical-to-digital response.",
    },
  ],
  floatingCard: {
    icon: "bolt",
    label: "Mina Status",
    value: "Precision Engaged",
  },
};

export const nalaSpotlightPreset: Omit<CrewSpotlightProps, "className"> = {
  imageSrc: "/NalaCrew.png",
  imageAlt: "Nala, senior QA lead — crew spotlight portrait",
  title: (
    <>
      Nala&apos;s Tactical{" "}
      <span className="text-primary">QA Station</span>
    </>
  ),
  description: (
    <>
      As our Senior QA Lead, Nala enforces a rigorous &ldquo;warm-start&rdquo;
      protocol. Her non-negotiable requirement for{" "}
      <span className="font-bold text-primary-dim italic">
        keyboard pre-warming
      </span>{" "}
      ensures that every keypress is softened by thermal excellence before the
      first line of code is even written. This artisanal approach to environment
      prep drastically reduces syntax errors caused by cold fingers.
    </>
  ),
  features: [
    {
      icon: "search_check",
      title: "Bug Detection",
      description:
        "Proactive sniffing of edge cases—with a strategically timed boop when the logic drifts.",
    },
    {
      icon: "speed",
      title: "Efficiency Opt.",
      description:
        "Forced ergonomic breaks every 45 minutes to prevent developer burnout and cognitive fatigue.",
      iconClassName: "text-secondary",
    },
  ],
  floatingCard: {
    icon: "bolt",
    label: "Nala Status",
    value: "Active Monitoring",
  },
};

export const flairSpotlightPreset: Omit<CrewSpotlightProps, "className"> = {
  imageSrc: "/FlairCrew.png",
  imageAlt: "Flair, Senior Research Assistant — crew spotlight portrait",
  title: <>Flair's Energetic<br /><span className='text-primary italic'> Research Hub</span></>,
  description: (
    <>
      As our Senior Research Assistant and the youngest member of the Web Design Lounge, Flair provides the essential{" "}
      <span className="font-bold text-primary-dim italic">
        late-night debugging energy
      </span>{" "}
      required for deep architectural work.
    </>
  ),
  features: [
    {
      icon: "bolt",
      title: "Debugging Energy",
      description:
        "High-intensity sprint support when deadlines loom and the Web Design Lounge stays lit past midnight.",
    },
    {
      icon: "center_focus_strong",
      title: "Focused Focus",
      description:
        "Immense concentration on the task at paw—until something jingles.",
      iconClassName: "text-secondary",
    },
  ],
  floatingCard: {
    icon: "bolt",
    label: "Flair Status",
    value: "Innovation Mode",
  },
};
