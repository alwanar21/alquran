import React from "react";
import DangerouslySetInnerHTML from "./dangerouslySetInnerHTML";

export default function Ayat({ data }) {
  return (
    <div className="max-w-7xl mx-auto p-6 mb-6 flex flex-col gap-3">
      <p className="text-center text-[#22A5AD] font-semibold text-4xl mb-6">
        -- بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ --
      </p>

      {data.map((ayat) => (
        <div className="p-6 border-b-2" key={ayat.nomor}>
          <div className="flex flex-row justify-between gap-3">
            <p className="text-right text-4xl font-semibold text-slate-500">
              {ayat.nomor}
            </p>
            <p className="text-right text-4xl font-semibold text-slate-500 leading-[48px]">
              {ayat.ar}
            </p>
          </div>
          <DangerouslySetInnerHTML konten={ayat.tr} className={"mt-4 mb-2"} />
          <p className="">{ayat.idn}</p>
        </div>
      ))}
    </div>
  );
}
