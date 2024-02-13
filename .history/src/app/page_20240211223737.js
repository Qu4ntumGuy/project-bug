import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div>
        <div className="">
          <Image src={bug} alt="bug" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
