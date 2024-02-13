import Image from "next/image";
import bug from "../../../public/Bug.svg";

export default function Signup() {
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <Image
          className=" absolute left-0 bottom-0"
          height={550}
          src={bug}
          alt="bug"
        />
      </div>
      <div className="w-full py-10">
        <div className="flex ml-20 flex-col">
          <div className="text-3xl my-3  p-2">Sign Up</div>
          <form className="w-[80%] ml-3 flex p-10 flex-col border-2 border-[#3B4252] rounded-2xl">
            <input
              className="rounded-lg border-2 border-[#3B4252] m-3 p-2 text-2xl"
              type="text"
            />
            <input
              className="rounded-lg border-2 my-7 border-[#3B4252] m-3 p-2 text-2xl"
              type="email"
            />
            <button className="text-white rounded-lg m-3 p-3 text-lg border-2 border-[#3B4252] bg-[#4C566A]">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
