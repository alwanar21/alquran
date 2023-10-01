"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navigation({ prev, after }) {
  const router = useRouter();
  return (
    <div className=" max-w-7xl mx-auto px-6 ">
      <div className="flex flex-row gap-3 justify-end">
        {prev ? (
          <button
            className="hover:bg-[#22A5AD] duration-500 bg-[#EBF9FA] py-2 mb-6 p-4  text-lg rounded-l-full text-[#22A5AD] hover:text-white font-semibold"
            onClick={() => router.push(`/surah/${prev.nomor}`)}
          >
            &lt;&lt; {prev.nama_latin}
          </button>
        ) : (
          ""
        )}
        {after ? (
          <button
            className="hover:bg-[#22A5AD] duration-500 bg-[#EBF9FA] py-2 mb-6 p-4  text-lg rounded-e-full text-[#22A5AD] hover:text-white font-semibold"
            onClick={() => router.push(`/surah/${after.nomor}`)}
          >
            {after.nama_latin} &gt;&gt;
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
