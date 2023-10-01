import Button from "./_components/button";

async function getData() {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(`${API_KEY}surah`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#EBF9FA] my-12  p-8 relative">
          <div className="bg-[#22A5AD] absolute -top-5 py-2 px-4 rounded-full text-white">
            Good To Know
          </div>
          <h2 className="text-[#22A5AD] font-bold text-4xl">Al- Quran</h2>
          <p className="text-lg pt-3 ">
            Al-Quran merupakan kitab yang diwahyukan Allah SWT kepada Nabi
            Muhammad SAW. Melalui malaikat Jibril untuk disampaikan kepada
            manusia. Al-Quran juga merupakan sumber dari ajaran Islam dan
            sebagai pedoman hidup bagi umat manusia. Al-Quran sendiri terdiri
            dari 30 juz 114 surat dan 6666 ayat yang diturunkan secara
            mutawatir.
          </p>

          <Button />
        </div>
      </div>
    </main>
  );
}
