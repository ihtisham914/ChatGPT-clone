"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

  navigate.push("/chat");

  return <></>;
}
