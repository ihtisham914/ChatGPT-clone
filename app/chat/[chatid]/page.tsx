"use client";
import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { chats } from "@/public/data/chats";
import Image from "next/image";

const page = ({ params }: any) => {
  const [allChats, setChats] = useState(chats);
  const chatid = params.chatid;
  var chat = allChats.find((chat) => chat._id === chatid);
  console.log(chat);
  return (
    <main className="m-auto h-screen max-w-3xl text-white p-2">
      {chat && (
        <div className="chat h-[86%] pt-2 flex flex-col overflow-y-scroll mb-4 pb-1 pr-1">
          {chat.msgs.map((msg: any, index: any) => (
            <div
              key={index}
              className={`flex items-start gap-3 py-6 px-8 ${
                msg.status === "response" && "bg-[#444654]"
              }`}
            >
              {msg.status === "response" ? (
                <Image
                  height={35}
                  width={35}
                  src="/gpt.png"
                  className="rounded-md"
                  alt="user profile"
                />
              ) : (
                <Image
                  height={35}
                  width={35}
                  src="/user.jpg"
                  className="rounded-md"
                  alt="user profile"
                />
              )}

              <span>{msg.text}</span>
            </div>
          ))}
        </div>
      )}
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
