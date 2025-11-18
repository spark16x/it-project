"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SyllabusCard() {
  const syllabusLinks = [
    { name: "Class 11 – Accountancy", url: "/syllabus/accountancy" },
    { name: "Class 11 – Business Studies", url: "/syllabus/business-studies" },
    { name: "Class 11 – Economics", url: "/syllabus/economics" },
    { name: "Class 11 – English", url: "/syllabus/english" },
    { name: "Class 11 – IT (802)", url: "/syllabus/it-802" },
  ]

  return (
    <Card className="w-full shadow-[0_0_20px] shadow-blue-500/40">
      <CardHeader>
        <CardTitle className="text-xl text-center">📚 Syllabus</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-3">
        {syllabusLinks.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="w-full px-4 py-2 rounded-lg border bg-card hover:bg-blue-600 hover:text-white transition-all"
          >
            {item.name}
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
