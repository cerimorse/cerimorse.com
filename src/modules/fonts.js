import { Rubik, Roboto_Mono } from "next/font/google";

const fontSans = Rubik({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export { fontSans, fontMono };
