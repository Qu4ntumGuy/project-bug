import Navbar from "@/components/Navbar";
import Image from "next/image";
import bug from "../../public/Bug.svg";

export default function Home() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div>
        <div
          className="bg-cover bg-center h-64"
          style={{ backgroundImage: "url(bug)" }}
        ></div>
        <div></div>
      </div>
    </div>
  );
}
