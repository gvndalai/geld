import React, { useState } from "react";

export const Form = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, for example, sending data to the server
    console.log("Form submitted with value:", inputValue);
    onClose();
  };

  return (
    <div className="fixed top-0">
      <div className="w-screen h-screen relative">
        <div className="bg-black opacity-55 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] bg-white p-8 rounded-md">
            <form onSubmit={handleSubmit}>
              <label htmlFor="inputField" className="block mb-4">
                Input Field:
              </label>
              <input
                id="inputField"
                type="text"
                className="w-full h-12 border border-solid border-gray-300 rounded-md p-4 mb-4"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-slate-700 w-full h-[48px] rounded-full text-white font-normal text-[20px]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
