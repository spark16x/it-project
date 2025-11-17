"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  const params = useSearchParams();
  const router = useRouter();
  
  useEffect(() => {
    const token = params.get("token");
    
    if (token) {
      // Save cookie
      document.cookie = `token=${token}; path=/; max-age=604800; Secure; SameSite=Lax`;
      
      // Redirect user to dashboard
      router.replace("/dashboard");
    }
  }, []);
  
  return <p>Logging you in…</p>;
}