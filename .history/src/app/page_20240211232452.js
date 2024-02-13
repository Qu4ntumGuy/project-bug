import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  const bgimg = "/Bug.svg";
  return (
    <div className=" bg-[#ECEFF4] ">
      <Navbar />
      <div className="flex justify-between h-[80%]">
        <Image className="-ml-40" src={bug} alt="bug" />
        <Image className="absolute h-96" src={bgdesign} alt="bgdesign" />
        {/* <div className="">
          <Image src={bug} alt="bug" />
        </div>
        <div className="">
          <Image src={bgdesign} alt="bgdesign" />
        </div> */}
      </div>
    </div>
  );
}
