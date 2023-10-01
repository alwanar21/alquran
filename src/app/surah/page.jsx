import DaftarSurah from "../_components/DaftarSurah";

async function getData() {
  const res = await fetch("https://quran-api.santrikoding.com/api/surah");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Surah() {
  const data = await getData();
  return (
    <div className="max-w-7xl mx-auto px-6 mt-5">
      <h2 className="bg-[#22A5AD] py-2 mb-6 pl-4 pr-14 text-lg rounded-e-full text-white font-semibold inline-block">
        Daftar Surah
      </h2>
      <DaftarSurah data={data} />
    </div>
  );
}
