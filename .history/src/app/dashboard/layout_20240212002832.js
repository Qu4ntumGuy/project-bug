"use client";
import Navbar from "@/components/Navbar";

export default function Dashboard({ children }) {
  //   const { data: session, status } = useSession();

  return (
    <div className="sticky top-0 h-screen inset-0">
      <div className="flex flex-col bg-white w-full">
        <Navbar />
        <div className="w-full h-screen overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
