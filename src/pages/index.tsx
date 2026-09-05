import { HomePage } from "@/components";
import { LenisProvider } from "@/providers";

export default function Home() {
  return (
    <LenisProvider>
      <HomePage />
    </LenisProvider>
  );
}
