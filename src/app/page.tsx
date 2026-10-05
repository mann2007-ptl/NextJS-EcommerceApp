"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {

  const router = useRouter();

  const isValid = true;

  const onClickHandle = () => {
    console.log("clicked");
    console.log("clicked");
    console.log("clicked");

    if (isValid) {
      router.push("/products")
    }
  }

  return (
    <div className="bg-gray-50 flex flex-col">

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">

        <img
          src="Walmart-Logo.png"
          className="w-[180px] mb-6"
          alt="Walmart Logo"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Walmart
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          Welcome to our online store
        </p>

        <button
          className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-cyan-700 hover:shadow-lg transition duration-200"
          onClick={onClickHandle}
        >
          Login
        </button>

      </div>

    </div>
  )
}