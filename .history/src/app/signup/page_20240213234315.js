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
          <input className="m-3 p-2 text-xl" type="text" />
          <input className="m-3 p-2 text-xl" type="email" />
          <button className="m-3 p-2">Sign Up</button>
        </form>
      </div>
    </div>
  );
}