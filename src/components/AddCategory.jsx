import React from "react";
import { useState } from "react";
import { HomeIcon } from "./icons/HomeIcon";

export const AddCategory = ({ onClose }) => {
  const [addCategoryVisible, setAddCategoryVisible] = useState(false);
  const closeButton = () => {
    setAddCategoryVisible(false);
    onClose();
  };

  return (
    <div className={`fixed top-0 ${addCategoryVisible && "hidden"}`}>
      <div className="w-screen h-screen relative">
        <div className="bg-black opacity-55 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[494px] h-fit bg-white p-8 rounded-md">
            <form>
              <div className="flex justify-between items-center border-b-2 pb-5">
                <label
                  htmlFor="inputField"
                  className="block font-semibold w-full  text-[20px]"
                >
                  Add Category
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
              <div className="pt-[24px] flex flex-col gap-[24px]">
                {" "}
                <div className="flex gap-[12px]">
                  <select className="h-fit w-fit flex items-center p-2 border border-solid border-gray-300 rounded-[8px]">
                    <option>⌂</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Write Here"
                    className="h-fit w-full flex items-center p-2 border border-solid border-gray-300 rounded-[8px]"
                  />
                </div>
                <div
                  className="btn btn-success w-full btn-xs text-white sm:btn-sm md:btn-md lg:btn-lg"
                  type="submit"
                >
                  + Add category
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
