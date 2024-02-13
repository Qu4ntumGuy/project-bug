import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  const bgimg = "../../public/Bug.jpg";
  return (
    <div className=" h-screen bg-[#ECEFF4] ">
      <Navbar />
      <div className="flex justify-between">
        <div
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "400px",
          }}
        >
          {/* Your content goes here */}
        </div>
        {/* <div className="overflow-hidden w-full h-full">
          <Image src={bug} alt="bug" />
        </div> */}
        <div className="flex bg-contain w-full items-end">
          <Image src={bgdesign} height={100} alt="bgdesign" />
        </div>
      </div>
    </div>
  );
}
