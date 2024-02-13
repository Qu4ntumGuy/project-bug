"use client";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Login({ children }) {
  //   const { data: session, status } = useSession();

  const router = useRouter();

  const aboutHandler = () => {
    router.push("/about");
  };
  const signupHandler = () => {
    router.push("/signup");
  };

  return (
    <>
      <nav className="h-[10%] relative w-full z-10 bg-[#4C566A] flex justify-end">
        <div className="absolute flex -left-1 -top-1">
          <Image
            src={reactangle}
            alt="reactangle"
            height={52}
            className=" rounded-md"
          />
        </div>
        <div className="flex m-3 w-48 mr-10 justify-between">
          <div className="flex cursor-pointer bg-[#ECEFF4] w-full mr-1 rounded-l-md items-center justify-center align-middle">
            <button className="" onClick={() => aboutHandler()}>
              About Us
            </button>
          </div>
          <div className="flex bg-[#ECEFF4] cursor-pointer w-full rounded-r-md items-center justify-center align-middle">
            <button onClick={() => signupHandler()}>Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="w-full overflow-hidden">{children}</div>
    </>
  );
}
