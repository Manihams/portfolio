import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Digital Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">
              <Link href="/">MyPortfolio</Link>
            </h1>
            <ul className="flex gap-6">
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="https://manihams.github.io/Unity-Game/" className="hover:text-blue-600">Projects</Link></li>
              <li><Link href="mailto:manihams123@gmail.com" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main className="flex-grow container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-black-200 mt-8 py-4">
          <div className="container mx-auto text-center text-sm text-black-700">
            © {new Date().getFullYear()} MyPortfolio. Built with Next.js & Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}
