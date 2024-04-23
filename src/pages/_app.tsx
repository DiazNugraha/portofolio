import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Condensed } from "next/font/google";
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
