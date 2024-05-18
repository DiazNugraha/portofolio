import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

export default function Profile() {
  return (
    <div className="flex gap-10 flex-col md:flex-row p-10 md:p-36">
      <div className="flex-1 flex items-center justify-center">
        <BackgroundGradient className="p-4">
          <Image
            src={"/assets/profile.png"}
            className="rounded-full"
            width={200}
            height={300}
            alt={"profile"}
          />
        </BackgroundGradient>
      </div>
      <div className="w-full flex-1 flex items-center justify-start">
        <p className="text-white text-[12px] md:text-[20px] text-justify">
          My journey in software engineering has been fueled by a relentless
          pursuit of innovation and excellence. I am driven by the desire to
          create impactful solutions that address real-world problems and
          enhance user experiences.
          <br />
          As a Software Engineer, I bring a diverse skill set encompassing
          frontend, backend, and full-stack development. I thrive in fast-paced
          environments where I can leverage my expertise to contribute to
          cutting-edge projects and drive organizational success.
          <br />
          My mission is to collaborate with forward-thinking teams and
          organizations to tackle complex challenges and deliver solutions that
          make a difference. I am excited to explore opportunities where I can
          apply my skills and passion for software engineering to create
          meaningful impact.
        </p>
      </div>
    </div>
  );
}
