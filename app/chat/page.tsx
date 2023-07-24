import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { points } from "@/public/data/disclaimer";

const page = () => {
  return (
    <main className="m-auto h-screen max-w-3xl text-white p-2">
      <div className="chat h-[88%] pt-2 flex items-center flex-col">
        <h1 className="text-3xl font-bold mt-4">ChatGPT Clone</h1>
        <div className="grid grid-cols-3 gap-2 mt-20">
          <div className="flex items-center font-bold text-lg flex-col gap-2">
            <span>🤖</span>
            <span>AI Technology</span>
          </div>
          <div className="flex items-center font-bold text-lg flex-col gap-2">
            <span>💡</span>
            <span>Not Professional Advice</span>
          </div>
          <div className="flex items-center font-bold text-lg flex-col gap-2">
            <span>🙅</span>
            <span>Responsible Use</span>
          </div>
          {points.map((point, index) => (
            <div
              key={index}
              className="border border-gray-500 rounded-md p-2 text-gray-300"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between w-full p-4 rounded-xl shadow-lg shadow-slate-700 border border-gray-600">
        <input
          className="w-full ouline-none bg-transparent focus:outline-none placeholder:text-gray-400"
          type="text"
          name="query"
          id="query"
          placeholder="Ask ChatGpt"
        />
        <span className="p-2 rounded-lg text-gray-200 bg-[#19C27D] cursor-pointer">
          <BsFillSendFill />
        </span>
      </div>
    </main>
  );
};

export default page;
