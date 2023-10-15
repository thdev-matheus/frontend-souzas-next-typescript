"use client";

import * as C from "@/components";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>Souza's</h1>
      <C.Button label="ir para login" onAction={() => router.push("/login")} />
    </div>
  );
}
