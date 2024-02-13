import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  const bgimg = "/Bug.svg";
  return (
    <div className="bg-[#ECEFF4] overflow-hidden ">
      <Navbar />
      <div className="flex justify-between">
        {/* <Image className="" src={bug} alt="bug" />
        <Image className=" top-1 w-[100%]" src={bgdesign} alt="bgdesign" /> */}
        <div className="w-full">
          <Image className="" height={550} src={bug} alt="bug" />
        </div>
        <div className="w-full">
          <Image
            className="absolute -top-1 right-0 w-[100%]"
            height={650}
            src={bgdesign}
            alt="bgdesign"
          />
        </div>
        <div className="absolute right-0 top-[30%]">
          <form className="flex flex-col justify-end items-end m-3 mr-10">
            <label className="mr-3 text-2xl font-semibold " htmlFor="search">
              Search
            </label>
            <input
              className="p-2 m-2 border border-gray-400 rounded-md"
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
