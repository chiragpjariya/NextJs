'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";




export default function Home() {

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn:async()=>{
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    }
  })

  console.log(data);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}
