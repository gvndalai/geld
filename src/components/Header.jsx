import React from "react";
import { Icon } from "./icons/Icon";
import { Button } from "./Button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-[1440px] px-[120px] py-[16px] justify-between">
        <div className="flex gap-[24px] ">
          {" "}
          <Icon />
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/records">Records</Link>
        </div>
        <div className="flex gap-[24px] items-center">
          <Button text="+ Record" />
          <div className="flex items-center justify-center ">
            <img
              src="empty-profile.jpg"
              className="w-[40px] h-full rounded-full m-0 p-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
