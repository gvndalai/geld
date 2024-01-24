import React from "react";
import { Logo } from "@/components/Logo";

const SignUpInformation = () => {
  return (
    <div className="h-screen w-screen">
      <div>
        <Logo />
        <div></div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[24px]"></div>
        <div></div>
      </div>
    </div>
  );
};

export default SignUpInformation;
