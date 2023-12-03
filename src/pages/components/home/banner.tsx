import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-screen w-screen  flex relative">
      <Image
        src="/assets/wallpaper.png"
        alt="banner"
        width={1920}
        height={1080}
      />
      <MainScreen />
      <InfoScreen />
    </div>
  );
}

function MainScreen() {
  return (
    <div className="w-[80%] h-[100vh]  pl-5 pr-5 pt-5 flex flex-col justify-between z-10 absolute">
      <div className="rounded-full flex gap-x-6 items-center justify-center border-2 border-pink-700 px-4 py-2 w-fit">
        <div className="w-[40px] h-[40px] bg-slate-200 rounded-full"></div>
        <span className="text-white">About Me</span>
        <span className="text-white">Challenges</span>
      </div>

      <div className="w-full h-[600px]  flex items-end">
        <div className="w-[80%] bg-black h-full rounded-t-[100px] border-t-[5px] border-l-[1px] border-pink-700"></div>
        <div className=" bg-black h-[30%] w-full relative rounded-tr-lg ">
          <div className="absolute -top-20 right-1/4  z-20">
            <button className="bg-blue-500 w-[400px] h-28 rounded-full text-4xl font-bold text-white"></button>
          </div>
          <div className=" h-[30%] w-full absolute -top-10 left-0 rounded-bl-full border-b-[5px] border-pink-700"></div>
        </div>
      </div>
    </div>
  );
}

function InfoScreen() {
  return (
    <div className="w-[20%] h-full bg-black z-10 absolute right-0 opacity-80 border-l-[1px] border-pink-700 p-5 flex flex-col gap-y-7">
      <div className="w-full h-[40%] bg-slate-200 rounded-3xl"></div>
      <button className="rounded-full w-full h-[15%] bg-slate-200">
        Some Info
      </button>
      <button className="rounded-full w-full h-[15%] bg-slate-200">
        Some Info
      </button>
      <div className="w-full h-full bg-slate-200 rounded-3xl"></div>
    </div>
  );
}
