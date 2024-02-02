import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Signup = () => {
  const router = useRouter();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSignup = async () => {
    const inputData = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        inputData
      );

      router.push("/signup-information");
      console.log("Signup response:", response);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="w-screen flex">
      <div className="bg-slate-700 h-screen w-full"></div>
      <div className="w-full bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-[40px] w-[384px]">
          <Logo />
          <div className="flex flex-col items-center">
            <h1 className="text-slate-900 font-roboto font-semibold text-[24px] leading-8">
              Create Geld account
            </h1>
            <p className="text-slate-700 font-roboto text-[16px] font-normal leading-6">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            {/*
              Use controlled components for input fields, updating state on change
            */}
            <input
              placeholder="Name"
              type="text"
              className="Name w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              value={nameValue}
              onChange={(e) => handleInputChange(e, setNameValue)}
            />
            <input
              placeholder="Email"
              type="text"
              className="Email w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              value={emailValue}
              onChange={(e) => handleInputChange(e, setEmailValue)}
            />
            <input
              placeholder="Password"
              type="password"
              className="Password w-full h-12 flex items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              value={passwordValue}
              onChange={(e) => handleInputChange(e, setPasswordValue)}
            />
            {/* Add re-password input here if needed */}
            <button
              type="button"
              onClick={handleSignup}
              className="bg-slate-700 w-[384px] h-[48px] rounded-full text-white font-normal text-[20px] flex items-center justify-center"
            >
              Sign up
            </button>
          </div>
          <div className="flex">
            <div>Already have an account?</div>
            <Link href="/login" className="px-[12px] text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
