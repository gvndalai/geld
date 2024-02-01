import React from "react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { InvisibleButton } from "@/components/icons/InvisibleButton";
import { More } from "@/components/icons/More";
import { Form } from "@/components/Form";

const Records = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [amountRange, setAmountRange] = useState(0);

  const handleCloseForm = () => {
    setFormVisible(false);
  };
  const handleAmountRangeChange = (e) => {
    setAmountRange(parseInt(e.target.value, 10));
  };
  return (
    <>
      <div className=" flex flex-col items-center">
        <Header />
        <div className="bg-gray-100 w-screen h-screen pt-[32px] flex flex-col items-center">
          <div className="flex gap-[24px] rounded-[12px] w-[1200px] ">
            <div className="flex flex-col gap-[24px] w-[282px] bg-white rounded-[12px] py-[24px] px-[16px] border-2">
              <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-semibold">Records</h1>
                <Button text="+ Add" onClick={() => setFormVisible(true)} />
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
                <div className="form-control">
                  <label className="label cursor-pointer flex justify-start gap-[8px]">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">All</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-[8px]">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Income</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-[8px]">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Expense</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="category-top flex justify-between">
                  <h1 className="text-[16px] font-semibold">Category</h1>
                  <p className="text-gray-300">Clear</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <InvisibleButton />
                      <h1>Food & Drink</h1>
                    </div>
                    <More />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[16px] font-semibold">Amount Range</h1>
                <div className="grid gap-[16px] grid-cols-2">
                  <div className="h-[48px] p-[16px] bg-gray-100 rounded-[8px] border-2 flex items-center">
                    {amountRange}
                  </div>
                  <div className="h-[48px] p-[16px] bg-gray-100 rounded-[8px] border-2 flex items-center">
                    1000
                  </div>
                </div>
                <div>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={amountRange}
                    onChange={handleAmountRangeChange}
                    className="range range-primary"
                  />
                </div>
              </div>
            </div>
            <div className="w-[894px] flex flex-col gap-[24px]">
              <div className="flex justify-between w-full">
                <div className="join">
                  <button className="join-item btn bg-gray-200">«</button>
                  <button className="join-item btn bg-gray-200">
                    Last 30 days
                  </button>
                  <button className="join-item btn bg-gray-200">»</button>
                </div>
                <div className="bg-white border-2 flex items-center rounded-[8px] p-[16px]">
                  <select>
                    <option>Most Recent</option>
                  </select>
                </div>
              </div>
              <div className=" flex flex-col">
                <div className="p-[16px] border-2 flex justify-between bg-white rounded-[8px] items-center">
                  <div>
                    <div className="form-control flex flex-row items-center gap-[16px]">
                      <label className="label cursor-pointer flex justify-start gap-[8px]">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary"
                        />
                      </label>
                      <div>Select All</div>
                    </div>
                  </div>
                  <div className="text-gray-300">- 35,500₮</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {formVisible && <Form onClose={handleCloseForm} />}
    </>
  );
};

export default Records;
