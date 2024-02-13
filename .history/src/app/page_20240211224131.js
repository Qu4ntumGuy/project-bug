import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="flex">
        <div className=" overflow-hidden w-[100%] h-full md:w-[25%]">
          <Image src={bug} alt="bug" />
        </div>
        <div>
          <Image src={bgdesign} alt="bgdesign" />
        </div>
      </div>
    </div>
  );
}
