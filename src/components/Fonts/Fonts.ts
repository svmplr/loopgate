import { Lato, Merriweather } from "@next/font/google";

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "100"
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-merriweather",
});