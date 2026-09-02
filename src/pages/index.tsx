import HomePage from "@/components/home";
import { LenisProvider } from "@/providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LenisProvider>
      <HomePage />
    </LenisProvider>
  );
}
