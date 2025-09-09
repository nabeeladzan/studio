"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OuterbaseMainPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/local");
  }, [router]);

  return null;
}
