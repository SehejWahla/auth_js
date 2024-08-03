"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router =  useRouter()
  const onClick = ()=>{
    console.log('sign-in pressed')
    router.push("/auth/login")
  }
  return (
    <main className="h-full flex flex-col items-center justify-center bg-black text-white gap-y-4">     
        <div className="text-6xl text-green-300 font-bold">Auth-Kit</div>
        <div className="text-xl text-green-300"><p>A simple Authentication service</p></div>
        <Button size="lg" variant="sign_in" onClick={onClick}>Sign-In</Button>
    </main>
  );
}
