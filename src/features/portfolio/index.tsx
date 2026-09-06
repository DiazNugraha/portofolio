// import { Meteors } from "../ui/meteors";
import AboutSection from "./about";
import Banner from "./banner";
import Experience from "./experience";
import HeaderPage from "./header";
import Information from "./information";
import Profile from "./profile";

// export default function PortfolioPage() {
//   return (
//     <div className="flex flex-col relative p-10">
//       {/* <div className="absolute w-full h-full overflow-hidden"> */}
//       {/*   <Meteors number={11} className="" /> */}
//       {/* </div> */}
//       <p className="text-white">AWIJDIWJWIAJawijaiwjawji</p>
//
//       {/* <Banner /> */}
//       {/* <Profile /> */}
//       {/* <Experience /> */}
//       {/* <Information /> */}
//     </div>
//   );
// }

export default function PortfolioPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8 my-10 flex flex-col gap-y-14">
        <HeaderPage />
        <AboutSection />
        <Experience />
        <Information />
      </section>
    </main>
  );
}
