"use client";
import Navbar from "@/components/Navbar";

export default function Dashboard({ children }) {
  //   const { data: session, status } = useSession();

  return (
    <>
      <Navbar />
      <div className="w-full h-screen overflow-hidden">{children}</div>
    </>
  );
}
