import React from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="w-screen flex">
        <div className="bg-white h-screen w-full flex flex-col items-center justify-center gap-[40px]">
          <Logo />
          <Link
            className="bg-blue-600 w-[384px] h-[48px] rounded-full text-white  font-normal text-[20px] flex items-center justify-center"
            href="/login"
          >
            Let's get started
          </Link>
        </div>
      </div>
    </>
  );
}
