"use client";

import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const RealTimeText: NextPage = () => {
  const [text, setText] = useState("テキストを入力してね");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="mt-14">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
        <h2 className="text-center text-3xl">{text}</h2>
        <div className="mt-6">
          <input
            onChange={handleInput}
            type="text"
            className="py-2 px-3 rounded-md border-2 border-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default RealTimeText;
