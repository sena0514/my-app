"use client";

import { NextPage } from "next";
import { useState } from "react";

const RandomWords: NextPage = () => {
  const [wordList, setWordList] = useState(
    "「A secret makes a woman woman.（女は秘密を着飾って美しくなるのよ。）」"
  );
  const words = [
    "「人はふとしたことで、傷つける側にも傷つけられる側にもなる。そうならないためには、相手の事を思いやる気持ちが必要なんじゃ。」",
    "「わけなんているのかよ? 人が人を殺す動機なんて、知ったこっちゃねーが… 人が人を助ける理由に… 論理的な思考は存在しねーだろ?」",
    "「一度口から出しちまった言葉は、もう元には戻せねぇんだぞ。言葉は刃物なんだ。使い方を間違えると、厄介な凶器になる」",
    "「方言は言葉に付けたアクセサリー…外したければ外せばいいけど、捨てちゃダメよ…」",
    "「子どもの言葉や行動で、人生が変わることもある。私はそれを体験して変われた」",
    "「その手ェ離したら…殺すで」",
  ];

  const handleWordChange = () => {
    const randomWords = words[Math.floor(Math.random() * words.length)];
    setWordList(randomWords);
  };

  return (
    <div className="h-screen bg-gradient-to-r from-white to-pink-300 pt-80">
      <div className="px-4 h-screen">
        <div className="max-w-5xl mx-auto bg-white rounded-md px-4 py-5">
          <h2 className="text-3xl font-bold text-center leading-relaxed">{wordList}</h2>
          <div className="text-center mt-10">
            <button
            onClick={handleWordChange}
            className="bg-gray-300 py-2 px-3 rounded-md shadow-md font-semibold">
              他の名言をみる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomWords;
