'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SigninBtn({className}) {
  return (
    <Link herf="/login"> 
    <Button type="submit" className="w-md">Login</Button>
</Link>
  )
}