import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div
        className="flex justify-between bg-[#ECEFF4]"
        style={{ backgroundImage: 'url("/bg-main.svg")' }}
      >
        <Image src={bgmain} alt="bug" />
        {/* <div className=" overflow-hidden w-full h-full md:w-[25%]">
          <Image src={bug} alt="bug" />
        </div>
        <div className=" bg-contain w-full h-[90%]">
          <Image src={bgdesign} alt="bgdesign" />
        </div> */}
      </div>
    </div>
  );
}
