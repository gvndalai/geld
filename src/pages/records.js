import React from "react";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { InvisibleButton } from "@/components/icons/InvisibleButton";
import { More } from "@/components/icons/More";
import { Form } from "@/components/Form";
import { Plus } from "@/components/icons/Plus";
import axios from "axios";
import { AddCategory } from "@/components/AddCategory";

const Records = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [amountRange, setAmountRange] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [addCategoryVisible, setAddCategoryVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [category, setCategory] = useState([]);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    // Fetch data from "http://localhost:8080/transaction" when the component mounts
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
  const handleAddCategory = () => {
    setAddCategoryVisible(false);
  };
  const handleAmountRangeChange = (e) => {
    setAmountRange(parseInt(e.target.value, 10));
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <div className=" flex flex-col items-center">
        <Header />
        <div className=" w-screen h-fit min-h-screen pt-[32px] flex flex-col items-center">
          <div className="flex gap-[24px] rounded-[12px] w-[1200px] ">
            <div className="flex flex-col gap-[24px] w-[282px] bg-base-100 rounded-[12px] py-[24px] px-[16px] border-[1px] h-fit ">
              <div className="flex flex-col gap-[24px]">
                <h1 className="text-[24px] font-semibold">Records</h1>
                <button
                  className="btn btn-primary rounded-full text-[20px]"
                  onClick={() => setFormVisible(true)}
                >
                  + Add
                </button>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full h-[32px] rounded-[12px] bg-base-300 py-[12px] px-[18px]"
                  placeholder="Search"
                ></input>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[16px] font-semibold">Types</h1>
                <div className="form-control">
                  <label className="label cursor-pointer flex justify-start gap-[8px]">
                    <input
                      type="radio"
                      name="type"
                      value="All"
                      className="radio radio-primary"
                      checked={selectedType === "All"}
                      onChange={() => handleTypeChange("All")}
                    />
                    <span className="label-text">All</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-[8px]">
                    <input
                      type="radio"
                      name="type"
                      value="INC"
                      className="radio radio-primary"
                      checked={selectedType === "INC"}
                      onChange={() => handleTypeChange("INC")}
                    />
                    <span className="label-text">Income</span>
                  </label>
                  <label className="label cursor-pointer flex justify-start gap-[8px]">
                    <input
                      type="radio"
                      name="type"
                      value="EXP"
                      className="radio radio-primary"
                      checked={selectedType === "EXP"}
                      onChange={() => handleTypeChange("EXP")}
                    />
                    <span className="label-text">Expense</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="category-top flex justify-between">
                  <h1 className="text-[16px] font-semibold">Category</h1>
                  <p className="text-base-300 cursor-pointer">Clear</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  {category
                    .filter((category) => category.userid === userId)
                    .map((category) => (
                      <div
                        className="flex items-center justify-between"
                        key={category.id}
                      >
                        <div className="flex items-center gap-[8px]">
                          <InvisibleButton />
                          <h1>{category.name}</h1>
                        </div>
                        <More />
                      </div>
                    ))}

                  <div
                    className="flex items-center gap-[8px] btn btn-sm"
                    onClick={() => setAddCategoryVisible(true)}
                  >
                    {" "}
                    <Plus /> <p>Add category</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[16px] font-semibold">Amount Range</h1>
                <div className="grid gap-[16px] grid-cols-2">
                  <div className="h-[48px] p-[16px] bg-base-300 rounded-[8px] border-[1px] flex items-center">
                    {amountRange}
                  </div>
                  <div className="h-[48px] p-[16px] bg-base-300 rounded-[8px] border-[1px] flex items-center">
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
                  <button className="join-item btn ">«</button>
                  <button className="join-item btn ">Last 30 days</button>
                  <button className="join-item btn ">»</button>
                </div>

                <select className="select select-bordered flex items-center w-[180px]">
                  <option>Most Recent</option>
                </select>
              </div>
              <div className=" flex flex-col gap-6">
                <div className="p-[16px] border-[1px] flex justify-between bg-base-100 rounded-[8px] items-center">
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
                  <div className="text-gray-300">₮</div>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Today</p>
                  <div className="flex flex-col gap-3">
                    {transactions
                      .filter((transaction) =>
                        selectedType === "All"
                          ? transaction.userid === userId
                          : transaction.userid === userId &&
                            transaction.transactiontype === selectedType
                      )
                      .map((transaction) => {
                        if (transaction.userid === userId) {
                          const selectedCategory = category.find(
                            (cat) => cat.id === transaction.categoryid
                          );

                          return (
                            <div
                              className="p-[16px] border-[1px] flex justify-between bg-base-100 rounded-[8px] items-center"
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
                                  transaction.transactiontype === "EXP"
                                    ? "-"
                                    : "+"
                                }${transaction.amount}₮`}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {formVisible && <Form onClose={handleCloseForm} />}
      {addCategoryVisible && <AddCategory onClose={handleAddCategory} />}
    </>
  );
};

export default Records;
