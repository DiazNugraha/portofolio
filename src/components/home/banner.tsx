import { Meteors } from "../ui/meteors";
import Card from "../ui/card";
import { TextGenerateEffect } from "../ui/text-generate-effect.";

export default function Banner() {
  return (
    <div className="h-screen md:h-screen w-full flex">
      <MainScreen />
    </div>
  );
}

function MainScreen() {
  return (
    <div className="w-full h-[100vh] pl-5 pr-5 pt-5 flex flex-col justify-between z-10 absolute">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="flex-1 h-full flex flex-col justify-around md:ml-40">
          <div className="">
            <h1 className="text-[50px] md:text-[100px] text-white font-bold flex flex-col">
              <span>Hello, I'm</span>
              <span className="-mt-3 md:-mt-12">Diaz Nugraha</span>
            </h1>
            <TextGenerateEffect
              words="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nostrum iste quibusdam aliquam maxime reiciendis odio nihil totam
              neque nesciunt quas, libero nulla voluptates velit excepturi quos
              quam. Non minus odit ad atque doloribus. Porro laudantium culpa
              excepturi eligendi nemo."
              className="text-[#CCCCCC] text-[15px] md:text-[20px] w-[80%]"
            />
          </div>

          <div className="mt-3 md:mt-5 flex flex-col gap-2 md:gap-4 text-white text-[12px] md:text-[18px]">
            <a className="" href="#">
              #1 ----------- HOME
            </a>
            <a className="" href="#">
              #2 ----------- EXPERIENCES
            </a>
            <a className="" href="#">
              #3 ----------- SKILLS
            </a>
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col gap-y-8 items-center md:items-end justify-center md:mr-40 mt-4 md:mt-0">
          <Card
            title="Github"
            name="@DiazNugraha"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nunc nisl ultricies nisl, eget nisl euismod nisl nisl."
            link="https://github.com/DiazNugraha"
            className="w-[350px] h-[100px] md:w-[586px] md:h-[188px]"
          />
          <Card
            title="LinkedIn"
            name="Diaz Nugraha"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nunc nisl ultricies nisl, eget nisl euismod nisl nisl."
            link="https://www.linkedin.com/in/diaz-nugraha-820342246/"
            className="w-[350px] h-[100px] md:w-[586px] md:h-[188px]"
          />
          <Card
            title="Javascript"
            name="Example"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur ultricies, nunc nisl ultricies nisl, eget nisl euismod nisl nisl."
            link="#"
            className="w-[350px] h-[100px] md:w-[586px] md:h-[188px]"
          />
        </div>
      </div>
    </div>
  );
}
