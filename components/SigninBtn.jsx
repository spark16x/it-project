'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "nextjs-toploader/app"

export default function SigninBtn() {
  const router = useRouter()

  return (
  <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6  ">
    <Button type="submit" className="w-md" onClick={()=> router.push("/login")
 }>Login</Button>
 </div>
  )
}