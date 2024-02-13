import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  const bgimg = "/Bug.svg";
  return (
    <div className="bg-[#ECEFF4] overflow-hidden h-screen ">
      <Navbar />
      <div className="flex justify-between h-[90%]">
        {/* <Image className="" src={bug} alt="bug" />
        <Image className=" top-1 w-[100%]" src={bgdesign} alt="bgdesign" /> */}
        <div className="">
          <Image className="w-full" src={bug} alt="bug" />
        </div>
        <div className="w-full">
          <Image className="-mt-40 -z-10" src={bgdesign} alt="bgdesign" />
        </div>
      </div>
    </div>
  );
}
