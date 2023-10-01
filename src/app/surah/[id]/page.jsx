import Ayat from "@/app/_components/ayat";
import ButtonBack from "@/app/_components/buttonBack";
import DangerouslySetInnerHTML from "@/app/_components/dangerouslySetInnerHTML";
import Navigation from "@/app/_components/navigation";
import React from "react";

async function getData(id) {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(`${API_KEY}surah/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function SurahById({ params }) {
  const data = await getData(params.id);
  return (
    <main className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#EBF9FA] my-12  p-8 relative">
          <div className="bg-[#22A5AD] absolute -top-5 py-2 px-4 rounded-full text-white">
            Surah
          </div>
          <h2 className="text-[#22A5AD] font-bold text-4xl ">
            {data.nama_latin}
          </h2>
          <p className="my-3 text-lg font-semibold text-slate-600">
            {data.arti} - {data.jumlah_ayat} ayat
          </p>
          <DangerouslySetInnerHTML konten={data.deskripsi} />

          <audio className="mt-4" src={data.audio} controls />
          <ButtonBack />
        </div>
      </div>
      <Navigation prev={data.surat_sebelumnya} after={data.surat_selanjutnya} />
      <Ayat data={data.ayat} />
    </main>
  );
}
