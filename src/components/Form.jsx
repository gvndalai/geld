import React, { useState } from "react";
import { Error } from "./Error";
import axios from "axios";

export const Form = ({ onClose, token }) => {
  const [amountValue, setAmountValue] = useState("");
  const [timeValue, setTimeValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [payeeValue, setPayeeValue] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState(false);
  const [toggleExpense, setToggleExpense] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !categoryValue.trim() ||
      !amountValue.trim() ||
      !timeValue.trim() ||
      !dateValue.trim()
    ) {
      setError(true);
    } else {
      setError(false);
      const formData = {
        time: timeValue,
        category: categoryValue,
        payee: payeeValue,
        date: dateValue,
        amount: amountValue,
        note: noteValue,
        type: toggleExpense ? "EXP" : "INC",
      };

      await createTransaction(formData, token);

      setCategoryValue("");
      setPayeeValue("");
      setAmountValue("");
      setTimeValue("");
      setDateValue("");
      setNoteValue("");
      onClose();
    }
  };

  const createTransaction = async (formData, token) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/transaction",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status !== 201) {
        console.error(
          "Transaction creation failed with status:",
          response.status
        );
      }

      const responseData = response.data;
      console.log("Transaction created successfully:", responseData);
    } catch (error) {
      console.error("Error during creating a transaction", error);
    }
  };

  const closeButton = () => {
    setFormVisible(false);
    onClose();
  };

  return (
    <div className={`fixed top-0 ${formVisible && "hidden"}`}>
      <div className="w-screen h-screen relative">
        <div className="bg-black opacity-55 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[792px] bg-white p-8 rounded-md">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between items-center border-b-2 pb-5">
                <label
                  htmlFor="inputField"
                  className="block font-semibold w-full  text-[20px]"
                >
                  Add Record
                </label>
                <button
                  className="btn btn-square"
                  onClick={closeButton}
                  type="button"
                >
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
                  <div className="grid grid-cols-2 gap-[12px] rounded-full overflow-hidden bg-gray-100">
                    <button
                      type="button"
                      onClick={() => {
                        setToggleExpense(true);
                      }}
                      className={`shadow-none rounded-full h-[40px] w-44 ${
                        toggleExpense
                          ? "bg-blue-600 border-none text-white"
                          : "hover:bg-blue-200"
                      }`}
                    >
                      Expense
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setToggleExpense(false);
                      }}
                      className={`shadow-none rounded-full h-[40px] w-44 ${
                        !toggleExpense
                          ? "bg-[#16A34A] text-white"
                          : "hover:bg-green-200"
                      }`}
                    >
                      Income
                    </button>
                  </div>
                  <div>
                    Amount
                    <input
                      id="inputField"
                      name="amount"
                      type="number"
                      className="w-full h-12 border border-solid border-gray-300 rounded-md p-2"
                      value={amountValue}
                      placeholder="₮ 000.00"
                      onChange={(e) => setAmountValue(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    Category{" "}
                    <select
                      className="w-full h-fit flex flex-col items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                      aria-placeholder="Choose a currency"
                      value={categoryValue}
                      onChange={(e) => setCategoryValue(e.target.value)}
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
                        value={dateValue}
                        onChange={(e) => setDateValue(e.target.value)}
                      />
                    </div>
                    <div>
                      Time
                      <input
                        id="time"
                        type="time"
                        className="w-full h-fit flex items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                        value={timeValue}
                        onChange={(e) => setTimeValue(e.target.value)}
                      />
                    </div>
                  </div>
                  {error && <Error onClose={() => setError(false)} />}
                  <button
                    type="submit"
                    className={`shadow-none rounded-full h-[48px] text-white text-[20px] w-full ${
                      toggleExpense
                        ? "bg-blue-600 border-none hover:bg-blue-400 "
                        : "bg-[#16A34A] hover:bg-green-400 "
                    }`}
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
                      value={payeeValue}
                      onChange={(e) => setPayeeValue(e.target.value)}
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
                        value={noteValue}
                        onChange={(e) => setNoteValue(e.target.value)}
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
