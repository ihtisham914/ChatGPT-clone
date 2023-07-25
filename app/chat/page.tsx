"use client";

import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { points } from "@/public/data/disclaimer";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobaleState/store";
import { useRouter } from "next/navigation";

const page = () => {
  const navigate = useRouter();
  const [msg, setMsg] = useState<string>("");
  const UserProfile: any = useSelector(
    (state: RootState) => state.users.UserProfile
  );
  const chatRef = collection(db, `chats`);

  const handleSend = async () => {
    if (msg == null || msg.length <= 0) return;

    // creating new chat
    const newChat = {
      name: msg.split(" ").slice(0, 3).join(" "),
      email: UserProfile.email,
      updatedAt: serverTimestamp(),
    };

    const chat = await addDoc(chatRef, newChat);

    const newMsg = {
      text: msg,
      status: "sent",
      sentAt: serverTimestamp(),
    };

    const messagesRef = collection(db, `chats/${chat.id}/messages`);

    setMsg("");
    await addDoc(messagesRef, newMsg);
    navigate.push(`/chat/${chat.id}`);
  };
  return (
    <main className="m-auto h-screen max-w-3xl text-white p-2">
      <div className="chat h-[86%] pt-2 flex items-center flex-col">
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
              className="bg-[#3E3F4B] rounded-md p-3 text-gray-300"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 justify-between w-full p-4 rounded-xl shadow-lg shadow-slate-700 border border-gray-600 ">
        <input
          className="w-full ouline-none bg-transparent focus:outline-none placeholder:text-gray-400"
          type="text"
          name="query"
          id="query"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          placeholder="Ask ChatGpt"
        />
        <span
          onClick={handleSend}
          className="p-2 rounded-lg text-gray-200 bg-[#19C27D] cursor-pointer"
        >
          <BsFillSendFill />
        </span>
      </div>
      <p className="text-[14px] mt-2 text-gray-400 text-center">
        Developed with love ❤️ and hope 🙂 by{" "}
        <span className="text-gray-300">Ihtisham Ul Haq</span>
      </p>
    </main>
  );
};

export default page;
