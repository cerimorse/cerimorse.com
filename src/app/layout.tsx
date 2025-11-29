import { fontSans } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppBar } from "@/components/layout/app-bar";
import { Footer } from "@/components/layout/footer";

import type { Metadata, Viewport } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cerimorse.com"),
  title: {
    template: "%s | Ceri Morse",
    default: "Ceri Morse",
  },
  description:
    "Building immersive digital experiences with cutting-edge web technologies, merging creativity and coding.",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppBar />
          <main className="bg-background min-h-screen mx-auto mt-16 mb-14 px-8 max-w-3xl">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
