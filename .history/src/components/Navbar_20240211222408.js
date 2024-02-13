import Image from "next/image";
import reactangle from "../../public/Rectangle 5.svg";

export default function Navbar() {
  return (
    <nav className="h-14 w-full bg-[#4C566A] flex justify-end">
      <div className=" absolute flex -left-1 -top-1">
        <Image
          src={reactangle}
          alt="reactangle"
          height={60}
          className=" rounded-md"
        />
      </div>
      <ul className="flex m-3 w-40 mr-10 justify-between">
        <li className="flex bg-[#ECEFF4] w-full mr-1 rounded-l-md items-center align-middle">
          <a href="/search">Search</a>
        </li>
        <li className="bg-[#ECEFF4] w-full rounded-r-md">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
