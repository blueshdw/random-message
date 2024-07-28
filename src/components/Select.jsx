import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const Select = () => {
  const { select, openSelectHandle } = useContext(MessageContext);

  const handleChange = (event) => {
    openSelectHandle(event.target.value);
  };

  return (
    <select
      value={select}
      onChange={handleChange}
      className="mt-4 border border-gray-300 outline-none cursor-pointer"
    >
      <option value="get">GET</option>
      <option value="create">CREATE</option>
    </select>
  );
};

export default Select;
