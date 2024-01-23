import React from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
const Signup = () => {
  return (
    <>
      <div className="w-screen flex">
        <div className="w-full bg-white flex items-center  justify-center">
          <div className="flex flex-col items-center gap-[40px] w-[384px]">
            <Logo />
            <div className="flex flex-col items-center">
              <h className="text-slate-900 font-roboto font-semibold text-[24px] leading-8">
                Create Geld account
              </h>
              <p className="text-slate-700 font-roboto text-[16px] font-normal leading-6">
                Sign up below to create your Wallet account
              </p>
            </div>
            <div className="flex flex-col w-full gap-4">
              <input
                placeholder="Name"
                type="text"
                className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              ></input>
              <input
                placeholder="Email"
                type="text"
                className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              ></input>
              <input
                placeholder="Password"
                type="text"
                className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              ></input>
              <input
                placeholder="Re-password"
                type="text"
                className="w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              ></input>
              <button
                type="submit"
                className="bg-blue-600 w-[384px] h-[48px] rounded-full text-white  font-normal text-[20px]"
              >
                Sign up
              </button>
            </div>
            <div className="flex">
              <div>Already have an account?</div>
              <Link className="px-[12px] text-blue-600" href="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-blue-600 h-screen w-full"></div>
      </div>
      ;
    </>
  );
};

export default Signup;
