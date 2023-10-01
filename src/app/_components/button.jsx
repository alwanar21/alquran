"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  return (
    <button
      type="button"
      className=" py-2 px-4 rounded-full mt-8 border-2 border-[#22A5AD] text-[#22A5AD] hover:border-none hover:bg-[#22A5AD] hover:text-white duration-500"
      onClick={() => router.push("/surah")}
    >
      Daftar Surah
    </button>
  );
}
