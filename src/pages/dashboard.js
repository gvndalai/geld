import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { DownIcon } from "@/components/icons/DownIcon";
import { BarData } from "@/components/chart/BarData";
import axios from "axios";
import { UpIcon } from "@/components/icons/UpIcon";
import { Form } from "@/components/Form";
import { BarChart } from "@/components/DashboardChart.";
const Dashboard = ({ formVisible, onCloseForm }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [userId, setUserId] = useState("");
  const [transactions, setTransactions] = useState([]);
  // const [ barChartData, setBarChartData] = useState()
  const handleOpenForm = () => {
    setFormVisible(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/transaction");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/category");
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    setUserId(localStorage.getItem("id"));
    fetchData();
    fetchCategoryData();
  }, []);

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
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-[600] text-[36px]"> 1,200,000 ₮</p>
                    <p className="font-[400] text-[18px] text-slate-500">
                      Your Income Amount
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <UpIcon />
                    <p>32% from last month</p>
                  </div>
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
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-[600] text-[36px]"> -1,200,000 ₮</p>
                    <p className="font-[400] text-[18px] text-slate-500">
                      Your Expense Amount
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <DownIcon />
                    <p>32% from last month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[24px]">
              <div className="shadow-md border-[1px] rounded-[12px] px-[24px] transform hover:scale-105">
                <div className="py-[16px] border-b-2 ">
                  <p>Income - Expense</p>
                </div>
                {/* <div className="py-[32px] px-[24px]">
                  <BarChart chartData={}/>
                </div> */}
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
              <ul className="flex flex-col w-full">
                {transactions.map((transaction) => {
                  if (transaction.userid === userId) {
                    const selectedCategory = category.find(
                      (cat) => cat.id === transaction.categoryid
                    );

                    return (
                      <li className="px-[16px]">
                        <div
                          className="p-[16px] flex justify-between bg-base-100  items-center w-full"
                          key={transaction.id}
                        >
                          <div>
                            <div className="form-control flex flex-row items-center gap-[16px]">
                              <div className="relative w-[40px] h-[40px] rounded-full bg-[#0166FF]">
                                {selectedCategory && (
                                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    {selectedCategory.category_image}
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className="text-[16px]">
                                  {transaction.description}
                                </p>
                                <p className="text-[12px] text-gray-500">
                                  {transaction.transactiontime}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`text-gray-300 ${
                              transaction.transactiontype === "EXP"
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {`${
                              transaction.transactiontype === "EXP" ? "-" : "+"
                            }${transaction.amount}₮`}
                          </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 "></div>
                      </li>
                    );
                  }
                  return null;
                })}
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
