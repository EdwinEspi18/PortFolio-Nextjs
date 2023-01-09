import { Poppins } from "@next/font/google";

export const titles = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});
