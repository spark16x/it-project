"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function AttendancePage() {
  // Fake student data
  const students = [
    { id: 1, name: "Aarav Sharma", roll: 1 },
    { id: 2, name: "Prisha Verma", roll: 2 },
    { id: 3, name: "Kabir Mehta", roll: 3 },
    { id: 4, name: "Riya Singh", roll: 4 },
    { id: 5, name: "Dev Rathore", roll: 5 },
    { id: 6, name: "Anaya Kapoor", roll: 6 },
    { id: 7, name: "Ishaan Bhatia", roll: 7 },
    { id: 8, name: "Sanya Gupta", roll: 8 },
  ]

  const [attendance, setAttendance] = useState({})

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleSubmit = () => {
    console.log("Attendance submitted: ", attendance)
    alert("Attendance saved bro 🔥 (check console)")
  }

  // return (
  //   <div className="max-w-3xl mx-auto py-10">
  //     <Card className="shadow-[0_0_20px] shadow-blue-500/40">
  //       <CardHeader>
  //         <CardTitle className="text-center text-xl">
  //           📋 Class Attendance
  //         </CardTitle>
  //       </CardHeader>

  //       <CardContent className="space-y-4">
  //         {/* Table-like UI */}
  //         <div className="grid grid-cols-3 font-medium border-b pb-2">
  //           <p>Roll</p>
  //           <p>Name</p>
  //           <p>Status</p>
  //         </div>

  //         {students.map((student) => (
  //           <div
  //             key={student.id}
  //             className="grid grid-cols-3 items-center py-2 border-b"
  //           >
  //             <p>{student.roll}</p>
  //             <p>{student.name}</p>
  //             <Checkbox
  //               checked={attendance[student.id] || false}
  //               onCheckedChange={() => toggleAttendance(student.id)}
  //             />
  //           </div>
  //         ))}

  //         <Button
  //           onClick={handleSubmit}
  //           className="w-full mt-4"
  //         >
  //           Save Attendance
  //         </Button>
  //       </CardContent>
  //     </Card>
  //   </div>
  // )
  return (
    <div>attendance</div>
  )
}
