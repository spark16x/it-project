"use client";

import { useEffect, useState, useRef } from "react";
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

  // Infinite Scroll States
  const [visibleCount, setVisibleCount] = useState(20);
  const loadMoreRef = useRef(null);

  // POPUP STATES
  const [dialogOpen, setDialogOpen] = useState(false);
  const [summary, setSummary] = useState({
    total: 0,
    present: 0,
    absent: 0,
    leave: 0,
    others: 0,
  });

  useEffect(() => {
    const updated = data.map((student,index) => ({
      ...student,
      status: "present",
      roll:index,
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

  // 🔥 Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 20);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    const present = students.filter((s) => s.status === "present").length;
    const absent = students.filter((s) => s.status === "absent").length;
    const leave = students.filter((s) => s.status === "leave").length;
    const others = students.filter((s) => s.status === "others").length;

    setSummary({
      total: students.length,
      present,
      absent,
      leave,
      others,
    });

    setDialogOpen(true);
  };

  const visibleStudents = students.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 items-center justify-center">
      <Card className="border border-primary/20">
        <CardContent className="flex gap-6 py-6">
          <Select
            onValueChange={(value) => {
              setSelectedClass(value);
              setSelectedSection("");
              setVisibleCount(20);
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

          <Select
            disabled={!selectedClass}
            onValueChange={(value) => {
              setSelectedSection(value);
              setVisibleCount(20);
            }}
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
          <Card className="w-full max-w-3xl shadow-xl border-neutral-700">
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
                  {visibleStudents.map((stu) => (
                    <TableRow key={stu.id} className="border-neutral-800">
                      <TableCell>{stu.roll}</TableCell>
                      <TableCell>{stu.name}</TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "present"}
                          onCheckedChange={() =>
                            changeStatus(stu.id, "present")
                          }
                        />
                      </TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "absent"}
                          onCheckedChange={() =>
                            changeStatus(stu.id, "absent")
                          }
                        />
                      </TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "leave"}
                          onCheckedChange={() => changeStatus(stu.id, "leave")}
                        />
                      </TableCell>

                      <TableCell>
                        <Checkbox
                          checked={stu.status === "others"}
                          onCheckedChange={() => changeStatus(stu.id, "others")}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Infinite Scroll Trigger */}
              <div ref={loadMoreRef} className="h-10"></div>

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

      {/* SUMMARY POPUP */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Attendance Summary</AlertDialogTitle>
            <AlertDialogDescription className="space-y-2">
              <p>
                <strong>Total:</strong> {summary.total}
              </p>
              <p className="text-green-500">
                <strong>Present:</strong> {summary.present}
              </p>
              <p className="text-red-500">
                <strong>Absent:</strong> {summary.absent}
              </p>
              <p className="text-orange-500">
                <strong>Leave:</strong> {summary.leave}
              </p>
              <p className="text-gray-400">
                <strong>Others:</strong> {summary.others}
              </p>
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
