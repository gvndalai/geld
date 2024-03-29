import React from "react";
import { Tugrug } from "@/components/icons/tugrug";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/router";

const SignUpInformation = () => {
  const router = useRouter();
  const routering = () => {
    router.push("/signup-information-second");
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-[141px]">
      <div className="w-[240px] flex flex-col items-center mt-[40px] gap-[48px]">
        <Logo />
        <div>
          <ul className="steps steps-vertical lg:steps-horizontal w-[240px]">
            <li className="step step-primary text-[14px]">Currency </li>
            <li className="step text-[14px]">Balance </li>
            <li className="step text-[14px]">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] w-[384px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col items-center gap-[16px]">
            <Tugrug />
            <h1 className="text-[24px]">Select base currency</h1>
          </div>
          <div className="flex flex-col gap-[16px]">
            <select
              className="w-full h-fit flex flex-col items-center p-4 border border-solid border-gray-300 rounded-[8px]"
              aria-placeholder="Choose a currency"
            >
              <option className="text-gray-500">choose a currency</option>
              <option value="tugrug">MNT - Mongolian Tugrik</option>
            </select>
            <p className="text-[12px]">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </p>
          </div>
        </div>
        <Button text="Confirm" onClick={routering} />
        <div></div>
      </div>
    </div>
  );
};

export default SignUpInformation;
