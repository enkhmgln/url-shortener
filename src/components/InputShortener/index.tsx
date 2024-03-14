import React, { useState } from "react";
import Button from "../General/Button";

type InputShortenerType = {
  setInputValue: (value: string) => void;
};

const InputShortener = ({ setInputValue }: InputShortenerType) => {
  const [value, setValue] = useState<string>();
  const handleClick = () => {
    if(value !== undefined){
      setInputValue(value);
    }
    setValue("");
  };
  return (
    <div className="flex flex-col p-10 max-w-md   text-blue-400">
      <h1 className="text-lg font-bold">
        ХОЛБООС <span className="text-green-500">БОГИНОСГОГЧ</span>
      </h1>
      <input
        type="text"
        className="my-4 bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
        placeholder="Холбоос оруулна уу  "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Button name="Богиносгох" onClick={handleClick} />
    </div>
  );
};

export default InputShortener;
