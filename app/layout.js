import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inframatic CoPilot",
  description: "Inframatic CoPilot is a generative engineering tool that automates, innovates, and accelerates your workflow. Welcome to the generative engineering era.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        {children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
