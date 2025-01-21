'use client'

import Link from "next/link";

// import Login from './login/page.js';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Login name="chirag"/> */}
      <Link href="/login" className="text-3xl font-bold underline">Login page</Link>
      <Link href="/about" className="text-3xl font-bold underline">About page</Link>
    </div>
  );
}
