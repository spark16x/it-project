"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import data from "./data.json";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  // load JSON data
  useEffect(() => {
    setStudents(data);
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

  const [form, setForm] = useState({
    id: null,
    Name: "",
    Class: "",
    Section: "",
    Roll: "",
    "Father Name": "",
    "Mother Name": "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    if (!form.Name || !form.Class || !form.Section) return;

    if (isEditing) {
      setStudents((prev) =>
        prev.map((s) => (s.id === form.id ? form : s))
      );
    } else {
      setStudents((prev) => [...prev, { ...form, id: Date.now() }]);
    }

    setForm({
      id: null,
      Name: "",
      Class: "",
      Section: "",
      Roll: "",
      "Father Name": "",
      "Mother Name": "",
    });

    setIsEditing(false);
  };

  const handleEdit = (student) => {
    setForm(student);
    setIsEditing(true);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  // filtered students ONLY after class + section selected
  const filteredStudents =
    students.filter(
      (s) =>
        selectedClass &&
        selectedSection &&
        s.Class === selectedClass &&
        s.Section === selectedSection
    );

  return (
    <div className="p-6 space-y-6">
      {/* CLASS + SECTION SELECT FIRST */}
      <Card className="border border-primary/20">
        <CardContent className="flex gap-6 py-6">

          {/* CLASS SELECT */}
          <Select
            onValueChange={(value) => {
              setSelectedClass(value);
              setSelectedSection(""); // reset section each time class changes
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

      {/* ONLY SHOW TABLE AFTER selecting class + section */}
      {selectedClass && selectedSection ? (
        <Card className="border border-primary/20">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-xl">
              Students – {selectedClass}-{selectedSection}
            </CardTitle>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">Add Student</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{isEditing ? "Edit Student" : "Add Student"}</DialogTitle>
                  <DialogDescription>Enter details below.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  {Object.keys(form).map((key) => {
                    if (key === "id") return null;
                    return (
                      <div key={key}>
                        <Label>{key}</Label>
                        <Input
                          value={form[key]}
                          onChange={(e) =>
                            setForm({ ...form, [key]: e.target.value })
                          }
                        />
                      </div>
                    );
                  })}
                </div>

                <Button onClick={handleSubmit}>
                  {isEditing ? "Update" : "Add"}
                </Button>
              </DialogContent>
            </Dialog>
          </CardHeader>

          <CardContent>
            {filteredStudents.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Father Name</TableHead>
                    <TableHead>Mother Name</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.Name}</TableCell>
                      <TableCell>{student.Class}</TableCell>
                      <TableCell>{student.Section}</TableCell>
                      <TableCell>{student["Father Name"]}</TableCell>
                      <TableCell>{student["Mother Name"]}</TableCell>

                      <TableCell className="text-right space-x-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleEdit(student)}
                        >
                          <Pencil size={16} />
                        </Button>

                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => deleteStudent(student.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p>No students found</p>
            )}
          </CardContent>
        </Card>
      ) : (
        <p className="text-center text-muted-foreground">
          Select Class & Section to view students.
        </p>
      )}
    </div>
  );
}
