import React, { useState } from "react";

export const DataArrayContext = createContext();
export const ArrayProvider = ({ children }) => {
  const [dataArray, setDataArray] = useState([]);
  return <div>DataArrayContex</div>;
};
