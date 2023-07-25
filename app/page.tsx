"use client";
import { RootState } from "@/GlobaleState/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useRouter();
  const UserProfile: any = useSelector(
    (state: RootState) => state.users.UserProfile
  );

  {
    UserProfile?.email ? navigate.push("/chat") : navigate.push("/auth");
  }

  return <></>;
}
