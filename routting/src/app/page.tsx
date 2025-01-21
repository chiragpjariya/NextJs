'use client';
import Link from 'next/link';
import Customebtn from './components/Customebtn';


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/login" className="text-3xl font-bold underline">Login Page</Link>
      <Link href="/about" className="text-3xl font-bold underline">About Page</Link>
      <Customebtn 
      linkText='Login'
      linking='/login'
      />

<Customebtn 
      linkText='About Us'
      linking='/about'
      />
    </div>
  );
}
