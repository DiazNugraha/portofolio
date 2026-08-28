export default function AboutSection() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl">About</h1>
      <div className="bg-transparent border-[1px] border-slate-800 w-full p-3 rounded-xl flex flex-col gap-2">
        <p className="text-justify">
          Hi there 👋 thanks for visiting, I&lsquo;m a Full Stack Software
          Developer and I also share my knowledge about programming mostly about
          web development and the programming language I use mostly Typescript,
          Python and Golang.
        </p>
      </div>
    </div>
  );
}
