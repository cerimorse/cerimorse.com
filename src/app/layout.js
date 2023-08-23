import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { fontSans } from "@/modules/fonts";
import { cn } from "@/modules/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/common/toaster";
import { AppBar } from "@/components/layout/app-bar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  metadataBase: new URL("https://cerimorse.com"),
  title: {
    template: "%s | Ceri Morse",
    default: "Ceri Morse",
  },
  description:
    "Building immersive digital experiences with cutting-edge web technologies, merging creativity and coding.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ceri Morse",
    description:
      "Building immersive digital experiences with cutting-edge web technologies, merging creativity and coding.",
    url: "/",
    siteName: "Ceri Morse",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceri Morse",
    description:
      "Building immersive digital experiences with cutting-edge web technologies, merging creativity and coding.",
    site: "@kezmorz",
    creator: "@kezmorz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppBar />
          <main className="bg-background min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
