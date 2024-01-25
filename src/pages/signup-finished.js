import React from "react";
import { useRouter } from "next/router";
import { Logo } from "@/components/Logo";
import { Finished } from "@/components/icons/Finished";
import { Button } from "@/components/Button";

const SignupFinished = () => {
  const router = useRouter();
  const routering = () => {
    router.push("/dashboard");
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center gap-[141px]">
      <div className="w-[240px] flex flex-col items-center mt-[40px] gap-[48px]">
        <Logo />
        <div>
          <ul className="steps steps-vertical lg:steps-horizontal w-[240px]">
            <li className="step step-primary text-[14px]">Currency </li>
            <li className="step step-primary text-[14px]">Balance </li>
            <li className="step step-primary text-[14px]">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] w-[384px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col items-center gap-[16px]">
            <Finished />
            <h1 className="text-[24px]">Good Job!</h1>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-[16px] text-center">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
          </div>
        </div>
        <Button text="Go to Dashboard" onClick={routering} />
        <div></div>
      </div>
    </div>
  );
};

export default SignupFinished;
