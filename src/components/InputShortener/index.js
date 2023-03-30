import Cookies from "js-cookie";
import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    Cookies.set('shortener',true)
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="flex flex-col p-10 max-w-md max-[768px]:   text-blue-400">
      <h1 className="text-lg">
        ХОЛБООС <span className="text-green-500">БОГИНОСГОГЧ</span>
      </h1>
      <input
        type="text"
        className="my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
        placeholder="Холбоосоо оруулна уу  "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button onClick={handleClick} className="transition ease-in-out bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">Богиносгох</button>
    </div>
  );
};

export default InputShortener;
