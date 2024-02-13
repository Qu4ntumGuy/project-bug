"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SideBar from "@/Components/SideBar";
import Navbar from "@/components/Navbar";

export default function Dashboard({ children }) {
  //   const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div className="sticky left-0 h-screen inset-0">
      <div className="flex bg-white w-full">
        <Navbar />
        <div className="w-full h-screen overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
