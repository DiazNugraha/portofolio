import { MenuIcon, XIcon } from "lucide-react";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { menuNavigations } from "@/constants";
import Link from "next/link";

export default function HamburgerSidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="border-[1px] border-slate-800 w-10 h-10 rounded-full flex items-center justify-center fixed top-3 right-3 z-[999] bg-black"
      >
        <MenuIcon color="white" width={20} />
      </button>
      {isOpen && <Menu onClose={() => setIsOpen(false)} />}
    </Fragment>
  );
}

const wrapperVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

interface IMenuProps {
  onClose: () => void;
}

function Menu({ onClose }: IMenuProps) {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="w-full h-full fixed z-[999] flex justify-between top-0"
    >
      <div className="flex-1 bg-transparent h-full" onClick={onClose}></div>
      <div className="w-[40%] bg-gray-900 h-full">
        <div className="flex flex-col gap-5 p-3">
          <div className="w-full flex justify-end">
            <XIcon color="white" className="justify-end" onClick={onClose} />
          </div>

          <div className="flex flex-col gap-3">
            {menuNavigations.map((navigation, index) => {
              const Icon = navigation.icon;

              return (
                <Link
                  key={index}
                  href={navigation.url}
                  className="
                    flex
                    items-center
                    gap-3

                    w-full
                    py-2
                    px-0

                    rounded-md

                    text-white
                  "
                >
                  <Icon width={14} height={14} className="text-inherit" />

                  <motion.span
                    className="
                      whitespace-nowrap
                      text-inherit
                      text-xs
                      font-medium
                    "
                  >
                    {navigation.label}
                  </motion.span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
