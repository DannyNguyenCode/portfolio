import { HOME_LCP_IMAGE_SRC } from "@/lib/home-lcp";

/**
 * Homepage-only: emit LCP image preload in the document head so the URL is
 * discoverable from initial HTML (Lighthouse “request discovery”).
 */
export default function HomeRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        rel="preload"
        href={HOME_LCP_IMAGE_SRC}
        as="image"
        fetchPriority="high"
      />
      {children}
    </>
  );
}
