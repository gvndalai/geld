import React, { useState } from "react";
import { CloseButton } from "./icons/CloseButton";
import e from "cors";

export const Form = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [toggleExpense, setToggleExpense] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value:", inputValue);

    // Set formVisible to false to keep the form visible after submission
    // setFormVisible(false);

    // Close the form after submission
    onClose();
  };

  const closeButton = () => {
    setFormVisible(false); // Close the form when the close button is clicked
    onClose();
  };

  return (
    <div className={`fixed top-0 ${formVisible && "hidden"}`}>
      <div className="w-screen h-screen relative">
        <div className="bg-black opacity-55 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[792px] bg-white p-8 rounded-md">
            <form>
              <div className="flex justify-between items-center border-b-2 pb-5">
                <label
                  htmlFor="inputField"
                  className="block font-semibold w-full  text-[20px]"
                >
                  Add Record
                </label>
                <button className="btn btn-square" onClick={closeButton}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fillRule="evenodd" // Change "fill-rule" to "fillRule"
                    clipRule="evenodd" // Change "clip-rule" to "clipRule"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-[44px] pt-[16px] ">
                <div className="flex flex-col gap-[36px] pb-[24px]">
                  <div className="grid grid-cols-2 bg-[#F3F4F6]  rounded-full ">
                    <div className="flex">
                      <button
                        onClick={(e) => {
                          setToggleExpense(!toggleExpense);
                          e.preventDefault();
                        }}
                        className={`btn shadow-none btn-primary rounded-full w-44 ${
                          toggleExpense && "bg-[#F3F4F6] border-none text-black"
                        }`}
                      >
                        Expense
                      </button>
                      <button
                        onClick={(e) => {
                          setToggleExpense(!toggleExpense); // Assuming you have a separate state for Income
                          e.preventDefault();
                        }}
                        className={`btn shadow-none btn-[#F3F4F6] text-white rounded-full w-44 ${
                          toggleExpense
                            ? "bg-[#16A34A]"
                            : "bg-[#F3F4F6] text-black"
                        }`}
                      >
                        Income
                      </button>
                    </div>
                  </div>
                  <div>
                    Amount
                    <input
                      id="inputField"
                      type="text"
                      className="w-full h-12 border border-solid border-gray-300 rounded-md p-2 "
                      value={inputValue}
                      placeholder="₮ 000.00"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    Category{" "}
                    <select
                      className="w-full h-fit flex flex-col items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                      aria-placeholder="Choose a currency"
                    >
                      <option hidden>Choose a category</option>
                      <option value="home">Home</option>
                      <option value="gift">Gift </option>
                      <option value="food">Food </option>
                      <option value="drink">Drink </option>
                      <option value="taxi">Taxi </option>
                      <option value="shopping">Shopping </option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-[12px] ">
                    <div className="">
                      Date
                      <input
                        id="date"
                        type="date"
                        className="w-full h-fit flex items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                      />
                    </div>
                    <div>
                      Time
                      <input
                        id="time"
                        type="time"
                        className="w-full h-fit flex items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary w-full h-[48px] rounded-full text-white font-normal text-[20px] border-none shadow-none ${
                      toggleExpense && "bg-[#16A34A]"
                    }`}
                    onClick={handleSubmit}
                  >
                    + Add record
                  </button>
                </div>
                <div className="flex flex-col gap-[48px] pb-[24px]">
                  <div>
                    Payee
                    <input
                      type="text"
                      placeholder="Write Here"
                      className="w-full h-fit flex items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                    />
                  </div>
                  <div className="h-full">
                    Note{" "}
                    <div className="container h-full">
                      <input
                        id="inputField"
                        type="text"
                        className="custom-input w-full h-full  border border-solid border-gray-300 rounded-md p-4 "
                        placeholder="Write Here"
                        // onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
