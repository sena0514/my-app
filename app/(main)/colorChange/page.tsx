"use client";

import { NextPage } from "next";
import { useState } from "react";

const ColorChangeButton: NextPage = () => {
  const [color, setColor] = useState("pink");
  const colors = [
    "lightblue",
    "lightgreen",
    "skyblue",
    "red",
    "indigo",
    "green",
    "slate",
    "orange",
    "yellow",
    "purple",
  ];

  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="pt-10 h-screen" style={{ background: color }}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-y-5 items-center ">
        <h2 className="text-xl text-center">ボタンを押すと背景の色が変わるよ</h2>
        <button
          onClick={handleColorChange}
          className="text-lg bg-white border-4 border-gray-400 rounded-md py-2 px-3"
        >
          カラーチェンジ
        </button>
      </div>
    </div>
  );
};
export default ColorChangeButton;
