import { TextGenerateEffect } from "@/components";

export default function AboutSection() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-white">About</h1>
      <TextGenerateEffect
        className="text-white text-[10px] md:text-sm text-justify font-light"
        words="As a front-end developer with over 3-years experience working in ReactJs and 1-year in ReactNative, I always improve my knowledge, develop professional skills, have the spirit of the market, learn from the experience and from colleagues to be an IT professional, ethical, good qualities. I intend to become a full-stack developer in the future. Applying experience in programming skills and understanding of the technologies learned to be an employee contributes and brings a lot of value to the Company."
      />
    </div>
  );
}
