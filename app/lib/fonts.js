import { Rubik, Roboto_Mono } from "next/font/google";

export const fontSans = Rubik({ subsets: ["latin"], variable: "--font-sans" });

export const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
