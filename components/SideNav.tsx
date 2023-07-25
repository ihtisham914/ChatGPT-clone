"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import userdp from "../public/user.jpg";
import { chats } from "@/public/data/chats";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGitlab } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RootState } from "@/GlobaleState/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const SideNav = () => {
  const [menuModal, setMenuModal] = useState(false);
  const UserProfile: any = useSelector(
    (state: RootState) => state.users.UserProfile
  );
  return (
    <>
      {UserProfile?.email && (
        <div className="w-[320px] h-full bg-[#202123] p-2">
          <Link
            href={`/chat`}
            className="flex items-center gap-4 py-3 px-4 border border-gray-600 text-sm rounded-lg hover:bg-gray-950 cursor-pointer transition-all"
          >
            <span className="text-lg">
              <BiPlus />
            </span>
            <span>New Chat</span>
          </Link>

          {/* All chats */}
          <div className="chats flex flex-col gap-1 h-[80vh] overflow-y-scroll mt-2 mb-1 pr-1 border-b border-gray-400">
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
          <div className="relative flex items-center justify-between p-2 mt-2 hover:bg-gray-700 rounded-lg cursor-pointer transition-all">
            <div
              onClick={() => setMenuModal(!menuModal)}
              className="flex items-center gap-2"
            >
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
          {menuModal && (
            <div className="z-20 absolute top-[340px] left-0 bg-black rounded-lg w-[265px] p-2">
              {/* Developer profile */}
              <div className="flex items-center flex-col gap-2 w-full my-4">
                <Image
                  src="/mydp.jpg"
                  className="rounded-lg h-20 w-20"
                  height={500}
                  width={500}
                  alt="dev image"
                />
                <h1>Software Engineer</h1>
                <div className="flex items-center justify-center gap-3">
                  <Link
                    href="https://www.linkedin.com/in/ihtisham-ul-haq-998669223"
                    target="_blank"
                    className="p-3 text-gray border-2 border-gray rounded-full transition-all hover:text-[#28E98C] hover:border-[#28E98C]"
                  >
                    <BsLinkedin />
                  </Link>
                  <Link
                    href="https://github.com/ihtisham914"
                    target="_blank"
                    className="p-3 text-gray border-2 border-gray rounded-full transition-all hover:text-[#28E98C] hover:border-[#28E98C]"
                  >
                    <BsGithub />
                  </Link>
                  <Link
                    href="https://gitlab.com/ihtisham914"
                    target="_blank"
                    className="p-3 text-gray border-2 border-gray rounded-full transition-all hover:text-[#28E98C] hover:border-[#28E98C]"
                  >
                    <SiGitlab />
                  </Link>
                </div>
                <a
                  href="https://ihtishamportfolionuxt.netlify.app"
                  target="_blank"
                  className="uppercase flex items-center justify-center gap-2 bg-[#28E98C] text-black w-full p-2 rounded-full border-2 border-[#28E98C] hover:bg-black hover:text-[#28E98C] transition-all"
                >
                  <MdEmail className="text-lg" />
                  <span className="text-sm">Portfolio</span>
                </a>
              </div>
              <div className="flex items-center gap-2 p-2 border-t border-gray-400 hover:text-red-500 hover:bg-gray-700 cursor-pointer transition-all">
                <span>
                  <FiLogOut />
                </span>
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SideNav;
