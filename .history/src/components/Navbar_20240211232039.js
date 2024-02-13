import Image from "next/image";
import reactangle from "../../public/Rectangle 5.svg";

export default function Navbar() {
  return (
    <nav className="relative h-[10%] w-full bg-[#4C566A] flex justify-end">
      <div className="absolute flex -left-1 -top-1">
        <Image
          src={reactangle}
          alt="reactangle"
          height={60}
          className=" rounded-md relative top-1 left-1"
        />
      </div>
      <div className="flex m-3 w-40 mr-10 justify-between">
        <div className="flex bg-[#ECEFF4] w-full mr-1 rounded-l-md items-center justify-center align-middle">
          <button>Search</button>
        </div>
        <div className="flex bg-[#ECEFF4] w-full rounded-r-md items-center justify-center align-middle">
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
}
