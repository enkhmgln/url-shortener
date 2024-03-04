import React, { useState } from "react";
import InputShortener from "./components/InputShortener";
import LinkResult from "./components/LinkResult";

function App() {
  const [InputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col justify-center text-center items-center bg-white max-[768px]:h-[60vh] ">
      <InputShortener setInputValue={setInputValue} />

      <LinkResult InputValue={InputValue} />
    </div>
  );
}

export default App;
