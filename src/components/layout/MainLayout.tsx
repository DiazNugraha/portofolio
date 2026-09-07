import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { Footer, HamburgerMenu, Sidebar } from ".";

export default function MainLayout({ children }: PropsWithChildren) {
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const isMobileSize = useMemo(() => {
    return screenSize ? screenSize < 1024 : false;
  }, [screenSize]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="lg:w-[30%] h-full">
        <div className="flex px-5 py-36 text-white flex-col items-center gap-y-16">
          {children}
          <Footer />
        </div>
      </div>

      {isMobileSize ? <HamburgerMenu /> : <Sidebar />}
    </div>
  );
}
