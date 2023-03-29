import { Montserrat, Merriweather } from "@next/font/google";

export const Montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-merriweather",
});