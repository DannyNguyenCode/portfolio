import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import { ContentWrapper } from "@components/ContentWrapper";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Danny Nguyen's Portfolio",
  description: "Using popular frameworks and libraries to render a fast, secure, and pleasing user experience to promote skills, passion, and experience in website developing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Nav />
          <ContentWrapper>
            {children}
            <Analytics />
          </ContentWrapper>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
