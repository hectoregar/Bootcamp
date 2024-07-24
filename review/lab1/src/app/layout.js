'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarHome from "lab1/components/shared/navbar/page";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={inter.className}>
              <NavbarHome/>
              {children}
              </body>
    </html>
  );
}
