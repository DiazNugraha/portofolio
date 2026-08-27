import Image from "next/image";
import { Globe } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";

export default function HeaderSection() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-1 text-white ">
          <span className="text-xl font-bold">Diaz Nugraha</span>
          <span className="text-xs">
            Software Engineer / Full Stack Developer focused on Web and Mobile
            App.
          </span>
          <div className="flex text-xs items-center gap-2">
            <Globe />
            <Link
              href={"https://maps.app.goo.gl/vANraJaTNSCMxQ376"}
              className="hover:underline"
            >
              Indramayu, West Java, Indonesia
            </Link>
          </div>
        </div>
        <div className="flex">
          <BackgroundGradient roundedFull>
            <Image
              src={"/assets/profile.png"}
              className="rounded-full"
              width={100}
              height={200}
              alt={"profile"}
            />
          </BackgroundGradient>
        </div>
      </div>
      {/* <div className="w-full flex flex-col gap-1"> */}
      {/* <TextGenerateEffect */}
      {/*   className="text-white text-[10px] md:text-sm text-justify font-light" */}
      {/*   words="As a front-end developer with over 3-years experience working in ReactJs and 1-year in ReactNative, I always improve my knowledge, develop professional skills, have the spirit of the market, learn from the experience and from colleagues to be an IT professional, ethical, good qualities. I intend to become a full-stack developer in the future. Applying experience in programming skills and understanding of the technologies learned to be an employee contributes and brings a lot of value to the Company." */}
      {/* /> */}

      {/* <TextGenerateEffect */}
      {/*   className="text-white text-[10px] md:text-sm text-justify font-light" */}
      {/*   words=" My journey in software engineering has been fueled by a relentless */}
      {/*   pursuit of innovation and excellence. I am driven by the desire to */}
      {/*   create impactful solutions that address real-world problems and */}
      {/*   enhance user experiences." */}
      {/* /> */}
      {/* <TextGenerateEffect */}
      {/*   className="text-white text-[10px] md:text-sm text-justify font-light" */}
      {/*   words=" As a Software Engineer, I bring a diverse skill set encompassing */}
      {/*   frontend, backend, and full-stack development. I thrive in fast-paced */}
      {/*   environments where I can leverage my expertise to contribute to */}
      {/*   cutting-edge projects and drive organizational success." */}
      {/* /> */}
      {/* <TextGenerateEffect */}
      {/*   className="text-white text-[10px] md:text-sm text-justify font-light" */}
      {/*   words="My mission is to collaborate with forward-thinking teams and */}
      {/*   organizations to tackle complex challenges and deliver solutions that */}
      {/*   make a difference. I am excited to explore opportunities where I can */}
      {/*   apply my skills and passion for software engineering to create */}
      {/*   meaningful impact." */}
      {/* /> */}

      {/* <p className="text-white text-[10px] md:text-sm text-justify font-light"> */}
      {/*   My journey in software engineering has been fueled by a relentless */}
      {/*   pursuit of innovation and excellence. I am driven by the desire to */}
      {/*   create impactful solutions that address real-world problems and */}
      {/*   enhance user experiences. */}
      {/*   <br /> */}
      {/*   As a Software Engineer, I bring a diverse skill set encompassing */}
      {/*   frontend, backend, and full-stack development. I thrive in fast-paced */}
      {/*   environments where I can leverage my expertise to contribute to */}
      {/*   cutting-edge projects and drive organizational success. */}
      {/*   <br /> */}
      {/*   My mission is to collaborate with forward-thinking teams and */}
      {/*   organizations to tackle complex challenges and deliver solutions that */}
      {/*   make a difference. I am excited to explore opportunities where I can */}
      {/*   apply my skills and passion for software engineering to create */}
      {/*   meaningful impact. */}
      {/* </p> */}
      {/* </div> */}
    </div>
  );
}
