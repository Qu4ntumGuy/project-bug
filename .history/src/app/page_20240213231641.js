import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";
import bgdesign from "../../public/bgDesign.svg";
import bgmain from "../../public/bg-main.svg";

export default function Home() {
  const bgimg = "/Bug.svg";
  return (
    <div className="bg-[#ECEFF4]">
      <Navbar />
      <div className="flex justify-between">
        {/* <Image className="" src={bug} alt="bug" />
        <Image className=" top-1 w-[100%]" src={bgdesign} alt="bgdesign" /> */}
        <div className="w-full">
          <Image className="" height={550} src={bug} alt="bug" />
        </div>
        <div className="w-full">
          <Image
            className="absolute top-5 right-0 w-[50%] h-[100%]"
            height={650}
            src={bgdesign}
            alt="bgdesign"
          />
        </div>
        <div className="absolute right-10 top-[35%] w-[40%]">
          <form className="flex w-full flex-col justify-end items-end m-3 mr-10">
            <label className="mr-3 text-4xl font-semibold " htmlFor="search">
              Search
            </label>
            <input
              className="p-2 focus:outline-none focus:border-gray-600 w-full m-2 border border-gray-400 rounded-md"
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
