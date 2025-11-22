"use client";

import { useState } from "react";
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
} from "@/components/ui/select"
import data from "./data.json"


export default function StudentsPage() {
  const [students, setStudents] = useState(false);
  let classes=['LKG/KG1/PP2','UKG/KG2/PP1','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
  
  let sections = { 
    'LKG/KG1/PP2':['A'],
    'UKG/KG2/PP1':['A'],
    'I':['A'],
    'II':['A'],
    'III':['A'],
    'IV':['A'],
    'V':['A'],
    'VI':['A','B','C','D'],
    'VII':['A','B','C','D'],
    'VIII':['A','B','C','D'],
    'IX':['A','B','C','D'],
    'X':['A','B','C'],
    'IX':['A','B','C','D'],
    'XII':['A','B','C','D','E','F']






    
  }
  const [form, setForm] = useState({ id: null, name: "", "Class": "", roll: "" });
  const [isEditing, setIsEditing] = useState(false);
  
  const handleSubmit = () => {
    if (isEditing) {
      setStudents((prev) =>
        prev.map((s) => (s.id === form.id ? form : s))
      );
    } else {
      setStudents((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }
    
    setForm({ id: null, name: "", "Class": "", roll: "" });
    setIsEditing(false);
  };
  
  const handleEdit = (student) => {
    setForm(student);
    setIsEditing(true);
  };
  
  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };
  
  return (
    <div className="p-6 space-y-6">
      <Card className="border border-primary/20">
        <CardContent>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Class" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Class</SelectLabel>
          {classes.map((value)=>{
          <SelectItem value={value}>{value}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
        </CardContent>
      </Card>
      <Card className="border border-primary/20">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-xl">Students</CardTitle>
          
          <Input type="text" placeholder="Search" className="w-[100px]" />
          {/* ADD STUDENT BUTTON */}
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Add Student</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{isEditing ? "Edit Student" : "Add Student"}</DialogTitle>
                <DialogDescription>
                  Fill in the details below.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    value={form.name}
                    placeholder="Student name"
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Grade</Label>
                  <Input
                    value={form.class}
                    placeholder="Class (e.g. XI-B)"
                    onChange={(e) =>
                      setForm({ ...form, "Class": e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>Roll No.</Label>
                  <Input
                    type="number"
                    value={form.roll}
                    placeholder="Roll number"
                    onChange={(e) =>
                      setForm({ ...form, roll: Number(e.target.value) })
                    }
                  />
                </div>
              </div>

              <Button onClick={handleSubmit}>
                {isEditing ? "Update Student" : "Add Student"}
              </Button>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardContent>
          {/* STUDENT TABLE */}
          {students ?
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Father name</TableHead>
                <TableHead>Mother name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {students.map((student) => (
                <TableRow>
                  <TableCell>{student.Name}</TableCell>
                  <TableCell>{student.Class}</TableCell>
                  <TableCell>{student.Section}</TableCell>
                  <TableCell>{student['Father Name']}</TableCell>
                  <TableCell>{student['Mother Name']}</TableCell>

                  <TableCell className="text-right space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => handleEdit(student)}
                        >
                          <Pencil size={16} />
                        </Button>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Student</DialogTitle>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                          <div>
                            <Label>Name</Label>
                            <Input
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                            />
                          </div>

                          <div>
                            <Label>Grade</Label>
                            <Input
                              value={form.grade}
                              onChange={(e) =>
                                setForm({ ...form, grade: e.target.value })
                              }
                            />
                          </div>

                          <div>
                            <Label>Roll No.</Label>
                            <Input
                              value={form.roll}
                              type="number"
                              onChange={(e) =>
                                setForm({
                                  ...form,
                                  roll: Number(e.target.value),
                                })
                              }
                            />
                          </div>
                        </div>

                        <Button onClick={handleSubmit}>Update Student</Button>
                      </DialogContent>
                    </Dialog>

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
           : 'no stdents'}
        </CardContent>
      </Card>
    </div>
  );
}