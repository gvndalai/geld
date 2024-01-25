import React from "react";
import { useRouter } from "next/router";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { Cash } from "@/components/icons/Cash";

const SignupInformationSecond = () => {
  const router = useRouter();
  const routering = () => {
    router.push("/signup-finished");
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-[141px]">
      <div className="w-[240px] flex flex-col items-center mt-[40px] gap-[48px]">
        <Logo />
        <div>
          <ul className="steps steps-vertical lg:steps-horizontal w-[240px]">
            <li className="step step-primary text-[14px]">Currency </li>
            <li className="step step-primary text-[14px]">Balance </li>
            <li className="step text-[14px]">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] w-[384px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col items-center gap-[16px]">
            <Cash />
            <h1 className="text-[24px]">Set up your cash Balance</h1>
          </div>
          <div className="flex flex-col gap-[16px]">
            <input
              className="w-full h-fit flex flex-col items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              type="text"
              placeholder="Wallet Balance"
            />

            <p className="text-[12px]">
              How much cash do you have in your wallet?
            </p>
          </div>
        </div>
        <Button text="Confirm" onClick={routering} />
        <div></div>
      </div>
    </div>
  );
};

export default SignupInformationSecond;
