"use client";
import Image from "next/image";
import React from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import userdp from "../public/user.jpg";
import { chats } from "@/public/data/chats";
import Link from "next/link";

const SideNav = () => {
  return (
    <div className="w-[320px] h-full bg-[#202123] p-2">
      <div className="flex items-center gap-4 py-3 px-4 border border-gray-600 text-sm rounded-lg hover:bg-gray-950 cursor-pointer transition-all">
        <span className="text-lg">
          <BiPlus />
        </span>
        <span>New Chat</span>
      </div>

      {/* All chats */}
      <div className="chats flex flex-col gap-1 h-[80vh] overflow-y-scroll mt-2 mb-1 pr-1">
        {chats.map((chat, index) => (
          <Link
            key={index}
            href={`/chat/${chat._id}`}
            className="flex items-center justify-between cursor-pointer transition-all w-full py-3 px-3 hover:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <BsChatDots />
              <span>{chat.name}</span>
            </div>
            <span className="text-gray-400 hover:text-white">
              <BiTrash />
            </span>
          </Link>
        ))}
      </div>

      {/* user account */}
      <div className="flex items-center justify-between border-t border-gray-400 pt-4">
        <div className="flex items-center gap-2">
          <Image
            src={userdp}
            height={35}
            width={35}
            className="rounded-md"
            alt="user profile"
          />
          <span>Ihtisham Ul Haq</span>
        </div>
        <span className="cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  );
};

export default SideNav;
