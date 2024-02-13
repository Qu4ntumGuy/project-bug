"use client";
import Image from "next/image";
import reactangle from "../../public/Rectangle 5.svg";
import styles from "./Diamond.module.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const loginHandler = (e) => {
    e.preventDefault();
    router.push("/login");
  };

  const signupHandler = (e) => {
    e.preventDefault();
    router.push("/signup");
  };

  return (
    <nav className="h-[10%] w-full z-20 bg-[#4C566A] flex justify-end">
      <div className="absolute flex -left-1 -top-1">
        <Image
          src={reactangle}
          alt="reactangle"
          height={52}
          className=" rounded-md"
        />
      </div>
      <div className="flex m-3 w-40 mr-10 justify-between">
        <div className="flex cursor-pointer bg-[#ECEFF4] w-full mr-1 rounded-l-md items-center justify-center align-middle">
          <button className="" onClick={() => signupHandler}>
            Sign Up
          </button>
        </div>
        <div className="flex bg-[#ECEFF4] cursor-pointer w-full rounded-r-md items-center justify-center align-middle">
          <button onClick={() => loginHandler}>Login</button>
        </div>
      </div>
    </nav>
  );
}
