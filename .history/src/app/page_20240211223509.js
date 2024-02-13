import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/Bug.svg')" }}
        >
          Bug Image
        </div>
        <div></div>
      </div>
    </div>
  );
}
