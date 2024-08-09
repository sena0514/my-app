"use client";
import { NextPage } from "next";
import { useState } from "react";

const CountUpPage: NextPage = () => {
  const [count, setCount] = useState(0);
  const countUpButton = () => {
    setCount((prev) => prev + 1);
    console.log("レンダリングされました");
  };

  const countDownButton = () => {
    setCount((prev) => prev - 1);
    console.log("レンダリングされました");
  };

  return (
    <div className="max-w-5xl mt-12 mx-auto">
      <div className="flex flex-col justify-center gap-y-8 items-center">
        <h2 className="text-4xl font-bold">Count: {count}</h2>
        <button
          onClick={countUpButton}
          className="text-lg  font-bold text-gray-700 bg-red-100 py-2 px-3 border-solid border-4 border-gray-400 rounded-lg"
        >
          カウントアップ
        </button>
        <button
          onClick={countDownButton}
          className="text-lg font-bold text-gray-700 bg-blue-100 py-2 px-3 border-solid border-4 border-gray-400 rounded-lg"
        >
          カウントダウン
        </button>
      </div>
    </div>
  );
};

export default CountUpPage;
