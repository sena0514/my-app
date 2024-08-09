"use client";
import { useState } from "react";

const TextChange = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleDisplay = () => {
    setIsHidden(true);
  };

  const handleDisplayOff = () => {
    setIsHidden(false);
  };

  return (
    <div className="mt-12 flex justify-center">
      <div className="max-w-5xl px-4 flex-col flex gap-y-5">
        {
          <h2
            className={`text-center font-bold text-2xl ${
              isHidden ? "visible" : "invisible"
            }`}
          >
            わーい
          </h2>
        }
        <button
          onClick={handleDisplay}
          className="text-xl py-2 px-8 rounded-lg border-4 border-gray-200 bg-red-300"
        >
          表示
        </button>
        <button
          onClick={handleDisplayOff}
          className="text-xl py-2 px-8 rounded-lg border-4 border-gray-200 bg-blue-300"
        >
          非表示
        </button>
      </div>
    </div>
  );
};

export default TextChange;
