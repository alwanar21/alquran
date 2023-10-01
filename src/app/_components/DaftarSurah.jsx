"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function DaftarSurah({ data }) {
  const router = useRouter();
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {data.map((surah) => (
        <div
          className="group p-4 rounded-2xl flex flex-row gap-4  align-middle border hover:border-[#22A5AD] duration-500 cursor-pointer"
          key={surah.nomor}
          onClick={() => router.push(`/surah/${surah.nomor}`)}
        >
          <div className="my-auto w-10 h-10 flex items-center justify-center bg-slate-200 rounded-sm group-hover:bg-[#22A5AD] duration-500">
            <h1 className="text-base font-semibold">{surah.nomor}</h1>
          </div>
          <div className="flex-1">
            <p className="text-lg font-bold text-slate-800">
              {surah.nama_latin}
            </p>
            <p className="text-slate-500 font-semibold group-hover:text-[#22A5AD] duration-500">
              {surah.arti}
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg text-slate-500 font-semibold ">
              {surah.nama}
            </p>
            <p className="text-slate-500 font-semibold group-hover:text-[#22A5AD] duration-500">
              {surah.jumlah_ayat} Ayat
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
