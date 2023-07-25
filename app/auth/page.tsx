"use client";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { db, auth, GoogleProvider } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { SignIn } from "@/GlobaleState/Slices/userSlice";
import Cookies from "universal-cookie";
import { addDoc, collection } from "firebase/firestore";

const cookies = new Cookies();

const page = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();

  const userRef = collection(db, "users");

  // SIGNIN FUNCTION
  const signInWithGoogle = async () => {
    try {
      // sign in with google
      const result = await signInWithPopup(auth, GoogleProvider);
      cookies.set("auth-token", result.user.refreshToken);

      const User = {
        username: auth.currentUser?.displayName,
        email: auth.currentUser?.email,
        photoURL: auth.currentUser?.photoURL,
      };
      dispatch(SignIn(User));

      // storing the user in firebase database
      await addDoc(userRef, User);
      navigate.push("/chat");

      // toast.success("Signed in successfully", {
      //   style: { width: "auto", height: "auto" },
      // });
    } catch (error) {
      console.log(error);
      //   toast.error("There was an error while signing you in", {
      //     style: { width: "auto", height: "auto" },
      //   });
      // }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex flex-col items-center gap-2 max-w-sm">
        <h1 className="text-3xl font-bold">ChatGPT Clone</h1>
        <p>Welcome to ChatGPT Clone</p>
        <button
          onClick={signInWithGoogle}
          className="py-2 px-4 bg-slate-500 rounded-lg w-full mt-4 hover:bg-slate-600 transition-all shadow-lg shadow-slate-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default page;
