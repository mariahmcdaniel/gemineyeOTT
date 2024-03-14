import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gemineye",
  description: "Handmade goods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      <BootstrapClient />
      </body>
    </html>
  );
}
