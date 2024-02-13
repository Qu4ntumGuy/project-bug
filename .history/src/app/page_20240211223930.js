import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="flex">
        <div className=" overflow-hidden md:w-[50%]">
          <Image src={bug} alt="bug" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
