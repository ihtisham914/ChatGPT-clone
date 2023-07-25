"use client";
import React, { useState, useEffect } from "react";
import { BsFillSendFill } from "react-icons/bs";
import Image from "next/image";
import {
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "@/app/firebase";
import { orderBy } from "firebase/firestore/lite";

const page = ({ params }: any) => {
  const [chat, setChat] = useState([]);
  const chatid = params.chatid;
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, `chats/${chatid}/messages`);

  useEffect(() => {
    // Get messages from firebase
    const queryMessages = query(messagesRef, orderBy("sentAt"));
    onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    // setTimeout(() => {
    //   lastmsg?.current?.scrollIntoView({
    //     behavior: "smooth",
    //   });
    // });
  }, [messages]);

  // FUNCTION TO SEND MESSAGE TO CHATGPT
  const handleSend = async () => {
    if (msg == null || msg.length <= 0) return;

    const newMsg = {
      text: msg,
      status: "sent",
      sentAt: serverTimestamp(),
    };

    setMsg("");
    await addDoc(messagesRef, newMsg);
  };

  return (
    <main className="m-auto h-screen max-w-3xl text-white p-2">
      {messages && (
        <div className="chat h-[84%] pt-2 flex flex-col overflow-y-scroll mb-4 pb-1 pr-1">
          {messages.map((msg: any, index: any) => (
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
      <div
        onClick={handleSend}
        className="flex items-center gap-4 justify-between w-full p-4 rounded-xl shadow-lg shadow-slate-700 border border-gray-600"
      >
        <input
          className="w-full ouline-none bg-transparent focus:outline-none placeholder:text-gray-400"
          type="text"
          name="query"
          id="query"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Ask ChatGpt"
        />
        <span className="p-2 rounded-lg text-gray-200 bg-[#19C27D] cursor-pointer">
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
