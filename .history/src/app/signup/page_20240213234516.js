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
      <div className="w-full flex flex-col">
        <div>Sign Up</div>
        <form className="flex m-3 p-10 flex-col border border-[#3B4252] rounded-md">
          <input
            className="rounded-md border border-[#3B4252] m-3 p-2 text-xl"
            type="text"
          />
          <input
            className="rounded-md border border-[#3B4252] m-3 p-2 text-xl"
            type="email"
          />
          <button className="text-white rounded-md m-3 p-2 border border-[#3B4252] bg-[#4C566A]">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
