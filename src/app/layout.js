import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al-Qur'an",
  description: "Creat Al-Qur'an App from santricoding API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full bg-[#22A5AD] h-40"></div>
        {children}
      </body>
    </html>
  );
}
