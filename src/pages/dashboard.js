import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { Form } from "@/components/Form";
const Dashboard = ({ formVisible, onCloseForm }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };
  return (
    <>
      <div className=" flex flex-col items-center">
        <Header onOpenForm={handleOpenForm} />
        <div className=" w-screen h-screen pt-[32px] flex flex-col items-center">
          <div className="w-[1200px] flex flex-col gap-[24px]">
            <div className="grid grid-cols-3 gap-[24px] ">
              <div className="transform hover:scale-105">
                <img src="Large.png"></img>
              </div>
              <div className="shadow-md border-[1px] rounded-[12px] pb-[24px] pr-[24px] pl-[24px] transform hover:scale-105">
                <div className="flex gap-[8px] items-center py-[16px] border-b-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <circle cx="4" cy="4" r="4" fill="#84CC16" />
                  </svg>
                  <p className="text-[16px] font-semibold">Your Income</p>
                </div>
              </div>
              <div className="shadow-md border-[1px] rounded-[12px] pb-[24px] pr-[24px] pl-[24px] transform hover:scale-105">
                <div className="flex gap-[8px] items-center py-[16px] border-b-2   ">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="4" fill="#0166FF" />
                  </svg>
                  <p className="text-[16px] font-semibold">Total Expenses</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[24px]">
              <div className="shadow-md border-[1px] rounded-[12px] px-[24px] transform hover:scale-105">
                <div className="py-[16px] border-b-2 ">
                  <p>Income - Expense</p>
                </div>
                <div className="py-[32px] px-[24px]"></div>
              </div>
              <div className="shadow-md border-[1px] rounded-[12px] px-[24px] transform hover:scale-105">
                <div className="py-[16px] border-b-2 ">
                  <p>Income - Expense</p>
                </div>
                <div className="py-[32px] px-[24px]">
                  <div class="mx-auto w-11/12 overflow-hidden md:w-3/5"></div>
                </div>
              </div>
            </div>
            <div className="w-full shadow-md border-[1px] h-fit rounded-[12px] ">
              <div className=" border-b-2 px-[24px] py-[16px] w-full">
                Last Records
              </div>
              <ul className="px-[24px]">
                <li className="py-[20px] border-b-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-[16px]">
                      <HomeIcon />
                      <div className="flex flex-col">
                        <div>Lending & Renting</div>
                        <div className="text-[12px] text-gray-500">
                          3 hours ago
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-lime-500">
                      + 1000$
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isFormVisible && <Form onClose={handleCloseForm} />}
    </>
  );
};

export default Dashboard;
