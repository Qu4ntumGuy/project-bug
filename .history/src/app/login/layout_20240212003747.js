"use client";
import Navbar from "@/components/Navbar";

export default function Login({ children }) {
  //   const { data: session, status } = useSession();

  return (
    <>
      <Navbar />
      <div className="w-full overflow-hidden">{children}</div>
    </>
  );
}
