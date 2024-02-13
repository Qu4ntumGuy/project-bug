import Image from "next/image";
import reactangle from "../../public/Rectangle 5.svg";

export default function Navbar() {
  return (
    <nav className="h-14 w-full bg-[#4C566A] flex">
      <div className=" absolute flex -left-10">
        <Image
          src={reactangle}
          alt="reactangle"
          height={54}
          className=" rounded-md"
        />
      </div>
      <ul className="flex">
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
