"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app"
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast"

export default function SuccessHandler() {
  const params = useSearchParams();
  const router = useRouter();
  const { toast } = useToast()
  
  useEffect(() => {
    const token = params.get("token");
    
    if (token) {
      localStorage.setItem('user',token)
      toast({
        title: "Login is successfull"
      })
      router.push("/dashboard");
    }
  }, [params, router]);
  
  return <p>Logging you in…</p>;
}