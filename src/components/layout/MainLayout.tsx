import { PropsWithChildren } from "react";
import { Footer, Sidebar } from ".";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex justify-center relative">
      <div className="lg:w-[30%] h-full">
        <div className="flex px-5 py-36 text-white flex-col items-center gap-y-16">
          {children}
          <Footer />
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
