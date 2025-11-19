"use client";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import gsap from "gsap";

export default function AttendancePage() {
  const tableRef = useRef(null);
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", roll: "11B-01", present: true },
    { id: 2, name: "Riya Kapoor", roll: "11B-02", present: false },
    { id: 3, name: "Kabir Singh", roll: "11B-03", present: true },
    { id: 4, name: "Meera Joshi", roll: "11B-04", present: true },
    { id: 5, name: "Dev Patel", roll: "11B-05", present: false },
  ]);
  
  
  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };
  
  const [filter, setFilter] = useState("all");
  
  const filtered = students.filter((s) => {
    if (filter === "all") return true;
    if (filter === "present") return s.present === true;
    if (filter === "absent") return s.status === "absent" || s.present === false;
    return s.status === filter;
  });
  
  const counts = {
    total: students.length,
    present: students.filter((s) => s.present).length,
    absent: students.filter((s) => !s.present).length,
    leave: students.filter((s) => s.status === "leave").length,
    others: students.filter((s) => s.status === "others").length,
  };
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-black">
      <Card className="w-full max-w-3xl bg-neutral-900 text-white shadow-xl border-neutral-700">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Student Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div ref={tableRef}>
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-700">
                  <TableHead className="text-blue-300">Roll No</TableHead>
                  <TableHead className="text-blue-300">Name</TableHead>
                  <TableHead className="text-blue-300">Present</TableHead>
                  <TableHead className="text-blue-300">Absent</TableHead>
                  <TableHead className="text-blue-300">Leave</TableHead>
                  <TableHead className="text-blue-300">Others</TableHead>


                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((stu) => (
                  <TableRow key={stu.id} className="border-neutral-800">
                    <TableCell>{stu.roll}</TableCell>
                    <TableCell>{stu.name}</TableCell>
                    <TableCell>
                      <Checkbox
                         id="toggle-1"
                         defaultChecked
                         className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700"
                           />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                         id="toggle-2"
                         className="data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 data-[state=checked]:text-white dark:data-[state=checked]:border-red-700 dark:data-[state=checked]:bg-red-700"
                           />
                    </TableCell>
                    <TableCell>
                      <Checkbox
                         id="toggle-3"
                         className="data-[state=checked]:border-orange-600 data-[state=checked]:bg-orange-600 data-[state=checked]:text-white dark:data-[state=checked]:border-orange-700 dark:data-[state=checked]:bg-orange-700"
                           />
                    </TableCell> 
                    <TableCell >
                      <Checkbox
                         id="toggle-4"
                         className="data-[state=checked]:border-grey-600 data-[state=checked]:bg-grey-600 data-[state=checked]:text-white dark:data-[state=checked]:border-grey-700 dark:data-[state=checked]:bg-grey-700"
                           />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

