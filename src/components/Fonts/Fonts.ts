import { Inter, Unbounded } from "@next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "100"
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-unbounded",
});