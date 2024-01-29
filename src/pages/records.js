import React from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

const Records = () => {
  return (
    <div className=" flex flex-col items-center">
      <Header />
      <div className="bg-gray-100 w-screen h-screen pt-[32px] flex flex-col items-center">
        <div className="flex gap-[24px] rounded-[12px] w-[1200px]">
          <div className="flex flex-col gap-[24px] w-[250px] bg-white rounded-[12px] py-[24px] px-[16px]">
            <div className="flex flex-col gap-[24px]">
              <h1 className="text-[24px] font-semibold">Records</h1>
              <Button text="+ Add" />
            </div>
            <div>
              <input
                type="text"
                className="w-full h-[32px] rounded-[12px] bg-gray-100 py-[12px] px-[18px]"
                placeholder="Search"
              ></input>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px] font-semibold">Types</h1>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Records;
