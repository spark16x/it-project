'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "nextjs-toploader/app"

export default function SigninBtn() {
  const router = useRouter()

  return (

    <Button type="submit" className="w-md" onClick={()=> router.push("/login")
 }>Login</Button>
  )
}