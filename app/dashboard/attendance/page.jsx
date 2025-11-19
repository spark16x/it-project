"use client";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"


export default function AttendancePage() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", roll: "11B-01", status: "present" },
    { id: 2, name: "Riya Kapoor", roll: "11B-02", status: "absent" },
    { id: 3, name: "Kabir Singh", roll: "11B-03", status: "present" },
    { id: 4, name: "Meera Joshi", roll: "11B-04", status: "present" },
    { id: 5, name: "Dev Patel", roll: "11B-05", status: "absent" },
  ]);

  const changeStatus = (id, newStatus) => {
    setStudents(prev =>
      prev.map(s =>
        s.id === id ? { ...s, status: newStatus } : s
      )
    );
  };

  const { toast } = useToast()


      


  const handleSubmit = () => {
      toast({
    title: "Attendance submited"
  })

    // You can later push this to backend, MongoDB, Supabase, etc.
    // fetch("/api/attendance", { method: "POST", body: JSON.stringify(students) })
  };

  return (
      <Card className="w-full max-w-3xl bg-neutral-900 text-white shadow-xl border-neutral-700">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Student Attendance</CardTitle>
        </CardHeader>
        <CardContent>
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

                  {/* Present */}
                  <TableCell>
                    <Checkbox
                      checked={stu.status === "present"}
                      onCheckedChange={() => changeStatus(stu.id, "present")}
                      className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600  dark:data-[state=checked]:border-green-600 dark:data-[state=checked]:bg-green-600"
                    />
                  </TableCell>

                  {/* Absent */}
                  <TableCell>
                    <Checkbox
                      checked={stu.status === "absent"}
                      onCheckedChange={() => changeStatus(stu.id, "absent")}
                      className="data-[state=checked]:border-red-600 data-[state=checked]:bg-red-600 dark:data-[state=checked]:border-red-600 dark:data-[state=checked]:bg-red-600"
                    />
                  </TableCell>

                  {/* Leave */}
                  <TableCell>
                    <Checkbox
                      checked={stu.status === "leave"}
                      onCheckedChange={() => changeStatus(stu.id, "leave")}
                      className="data-[state=checked]:border-orange-600 data-[state=checked]:bg-orange-600 dark:data-[state=checked]:border-orange-600 dark:data-[state=checked]:bg-orange-600"
                    />
                  </TableCell>

                  {/* Others */}
                  <TableCell>
                    <Checkbox
                      checked={stu.status === "others"}
                      onCheckedChange={() => changeStatus(stu.id, "others")}
                      className="data-[state=checked]:border-gray-500 data-[state=checked]:bg-gray-500 dark:data-[state=checked]:border-gray-500 dark:data-[state=checked]:bg-gray-500"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit Attendance
            </Button>
          </div>

        </CardContent>
      </Card>
  );
}
