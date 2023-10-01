"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonBack() {
  const router = useRouter();
  return (
    <button
      className="bg-[#22A5AD] duration-500  py-2 mt-6 p-4   text-lg rounded-full text-white font-semibold"
      onClick={() => router.push(`/surah`)}
    >
      Daftar Surah
    </button>
  );
}
