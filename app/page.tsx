"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard')
  }, [])
  return (
    <>
      <h1 className="min-h-screen flex items-center justify-center text-3xl font-bold text-center">
        Comming Soon
      </h1>
    </>
  );
}
