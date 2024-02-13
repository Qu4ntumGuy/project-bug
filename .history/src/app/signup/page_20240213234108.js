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
        <form className="flex flex-col border border-[#3B4252] rounded-md">
          <input type="text" />
          <input type="email" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
