"use client";

import { NextPage } from "next";
import { ChangeEvent, useState } from "react";

const AddComments: NextPage = () => {
  const [inputText, setInputText] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleInputComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputText.trim()) return;
    setCommentList((prev) => [...prev, inputText]);
    setInputText("");
  };

  return (
    <div className="mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-y-5">
        <textarea
          value={inputText}
          onChange={handleInputComment}
          placeholder="メモを入力"
          className="resize-none border-2 border-gray-400 rounded-md w-72 py-2 px-2 text-center"
        ></textarea>
        <div>
          <button
            onClick={handleSubmit}
            className="border-2 border-gray-500 rounded-md bg-blue-200 py-1 px-3 transition duration-300 hover:bg-blue-400"
          >
            追加
          </button>
        </div>
        <div>
          <ul className="flex flex-col items-center gap-y-3 w-72">
            {commentList.map((comment, index) => (
              <li
                key={index}
                className="w-full bg-white p-2 shadow-md rounded-md"
              >
                {comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddComments;
