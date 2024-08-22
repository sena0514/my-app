"use client";

import { NextPage } from "next";
import { useState } from "react";

const NumberChange: NextPage = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(numArray);

  const handleShuffleNum = () => {
    const newNum = [...num];
    const value = newNum.pop();
    if (value !== undefined) {
      newNum.unshift(value);
      setNum(newNum);
    }
  };

  return (
    <div className="pt-20 h-screen bg-blue-400">
      <div className="max-w-5xl mx-auto px-4  gap-y-8 ">
        <h1 className="font-semibold text-center text-5xl">{num}</h1>
        <div className="mt-8 text-center">
          <button
            onClick={handleShuffleNum}
            className="border-2 border-gray-400 rounded-md py-2 px-3 bg-white"
          >
            シャッフル
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberChange;
