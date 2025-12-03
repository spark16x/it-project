"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import data from "./data.json";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function AttendancePage() {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [summary, setSummary] = useState({
    total: 0,
    present: 0,
    absent: 0,
    leave: 0,
    others: 0,
  });

  useEffect(() => {
    const updated = data.map((student, index) => ({
      ...student,
      status: "present",
      id: index,
    }));
    setStudents(updated);
  }, []);

  const classes = [
    "LKG/KG1/PP2",
    "UKG/KG2/PP1",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];

  const sections = {
    "LKG/KG1/PP2": ["A"],
    "UKG/KG2/PP1": ["A"],
    I: ["A"],
    II: ["A"],
    III: ["A"],
    IV: ["A"],
    V: ["A"],
    VI: ["A", "B", "C", "D"],
    VII: ["A", "B", "C", "D"],
    VIII: ["A", "B", "C", "D"],
    IX: ["A", "B", "C", "D"],
    X: ["A", "B", "C"],
    XI: ["A", "B", "C", "D"],
    XII: ["A", "B", "C", "D", "E", "F"],
  };

  const changeStatus = (id, newStatus) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  // 🔥 Filter Students by Class & Section
  let filteredStudents = students.filter(
    (s) =>
      selectedClass &&
      selectedSection &&
      s.Class === selectedClass &&
      s.Section === selectedSection
  );

  // 🔥 Assign new roll numbers after filtering
  filteredStudents = filteredStudents.map((s, index) => ({
    ...s,
    roll: index + 1,
  }));

  const handleSubmit = () => {
    const present = filteredStudents.filter((s) => s.status === "present").length;
    const absent = filteredStudents.filter((s) => s.status === "absent").length;
    const leave = filteredStudents.filter((s) => s.status === "leave").length;
    const others = filteredStudents.filter((s) => s.status === "others").length;

    setSummary({
      total: filteredStudents.length,
      present,
      absent,
      leave,
      others,
    });

    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 items-center justify-center">
      <Card className="border border-primary/20">
        <CardContent className="flex gap-6 py-6">
          {/* CLASS SELECT */}
          <Select
            onValueChange={(value) => {
              setSelectedClass(value);
              setSelectedSection("");
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Class</SelectLabel>
                {classes.map((cls) => (
                  <SelectItem key={cls} value={cls}>
                    {cls}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* SECTION SELECT */}
          <Select
            disabled={!selectedClass}
            onValueChange={(value) => setSelectedSection(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Section</SelectLabel>
                {selectedClass &&
                  sections[selectedClass].map((sec) => (
                    <SelectItem key={sec} value={sec}>
                      {sec}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedClass && selectedSection ? (
        <div className="flex flex-col gap-4 py-4 items-center justify-center">
          <Card className=" shadow-xl border-neutral-700">
            <CardHeader>
              <CardTitle className="text-xl text-primary-foreground">
                Student Attendance
              </CardTitle>
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
                  {filteredStudents.map((stu) => (
                    <TableRow key={stu.id} className="border-neutral-800">
                      <TableCell>{stu.roll}</TableCell>
                      <TableCell>{stu.Name}</TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "present"}
                          onCheckedChange={() => changeStatus(stu.id, "present")}
                          className="data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500 dark:data-[state=checked]:border-green-500 dark:data-[state=checked]:bg-green-500 "
                        />
                      </TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "absent"}
                          onCheckedChange={() => changeStatus(stu.id, "absent")}
                          className="data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500 dark:data-[state=checked]:border-red-500 dark:data-[state=checked]:bg-red-500"
                        />
                      </TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "leave"}
                          onCheckedChange={() => changeStatus(stu.id, "leave")}
                          className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500 dark:data-[state=checked]:border-orange-500 dark:data-[state=checked]:bg-orange-500"
                        />
                      </TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "others"}
                          onCheckedChange={() => changeStatus(stu.id, "others")}
                          className="data-[state=checked]:border-gray-500 data-[state=checked]:bg-gray-500 dark:data-[state=checked]:border-gray-500 dark:data-[state=checked]:bg-gray-500 "
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

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
        </div>
      ) : (
        <p className="text-center text-muted-foreground">
          Select Class & Section to view students.
        </p>
      )}

      {/* POPUP */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Attendance Summary</AlertDialogTitle>
            <AlertDialogDescription className="space-y-2">
              <p><strong>Total:</strong> {summary.total}</p>
              <p className="text-green-500"><strong>Present:</strong> {summary.present}</p>
              <p className="text-red-500"><strong>Absent:</strong> {summary.absent}</p>
              <p className="text-orange-500"><strong>Leave:</strong> {summary.leave}</p>
              <p className="text-gray-400"><strong>Others:</strong> {summary.others}</p>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction className="bg-blue-600 hover:bg-blue-700 text-white">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
