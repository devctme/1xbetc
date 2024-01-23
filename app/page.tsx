"use client";
import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  const textToCopy = "sunbet360";

  return (
    <main className="w-full min-h-screen  flex items-center justify-center p-4 sm:p-6  ">
      <div className="bg-transparent w-full  sm:w-96  p-5 my-5  rounded-lg  border-2 border-blue-400">
        <div className="flex flex-col gap-y-8 items-center justify-around">
          <h1 className="text-4xl font-bold text-center text-white">
            sunbet360
          </h1>
          <div className="w-36 h-36 rounded-full border-4 border-sky-400 flex items-center justify-center ">
            <h1 className="font-extrabold text-4xl ">
              <span className="text-sky-400">1X</span>
              <span className="text-white">BET</span>
            </h1>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link
              href="https://affpa.top/L?tag=d_1358953m_27409c_b360&site=1358953&ad=27409"
              className="font-bold p-3 border-2 rounded-xl border-sky-400 text-xl text-white transition-all ease-in duration-300 hover:text-yellow-500"
            >
              Download app
            </Link>
          </div>
          <div className="border-2 border-sky-500 rounded-md w-full flex flex-col items-center justify-between gap-y-8 py-6 relative">
            <h1 className="text-white font-semibold text-2xl">
              Promo Code copy
            </h1>
            <h2 className="text-amber-400 font-bold text-2xl">{textToCopy}</h2>
            <CopyToClipboardButton text={textToCopy} />
          </div>
          <div className="border-2 border-sky-400 rounded-md w-full flex flex-col items-center justify-between gap-y-8 py-8">
            <div>
              <h1 className="text-white font-semibold text-2xl text-center">
                Click Below button
              </h1>
            </div>

            <Link
              href="https://affpa.top/L?tag=d_1358953m_14249c_&site=1358953&ad=14249"
              className="font-bold p-3 border-2 rounded-xl border-sky-400 text-xl text-white transition-all ease duration-300 hover:text-yellow-500 "
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
