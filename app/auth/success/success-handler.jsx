"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast"

export default function SuccessHandler() {
  const params = useSearchParams();
  const router = useRouter();
  const { toast } = useToast()
  
  useEffect(() => {
    const token = params.get("token");
    
    if (token) {
      document.cookie = `token=${token}; path=/; max-age=604800; Secure; SameSite=Lax`;
      toast({
        title: "Login is successfull"
      })
      router.replace("/dashboard");
    }
  }, [params, router]);
  
  return <p>Logging you in…</p>;
}