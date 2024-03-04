import React from "react";

type Props = {
  onClick?: () => void;
  name: string;
};

const Button = ({ onClick, name }: Props) => {
  return (
    <button
      onClick={onClick}
      className="transition ease-in-out bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-500"
    >
      {name}
    </button>
  );
};

export default Button;
