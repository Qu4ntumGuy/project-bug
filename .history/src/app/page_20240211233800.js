import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  const bgimg = "/Bug.svg";
  return (
    <div className="h-screen bg-[#ECEFF4] ">
      <Navbar />
      <div className="flex justify-between h-[90%]">
        {/* <Image className="" src={bug} alt="bug" />
        <Image className=" top-1 w-[100%]" src={bgdesign} alt="bgdesign" /> */}
        <div className=" relative w-1/4">
          <Image className="h-full absolute" src={bug} alt="bug" />
        </div>
        <div className="w-full">
          <Image className="h-full" src={bgdesign} alt="bgdesign" />
        </div>
      </div>
    </div>
  );
}
