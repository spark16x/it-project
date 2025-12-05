"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle as DialogTitleUI,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function TeachersPage() {
  const subjectsList = ["English", "Mathematics", "Science", "Computer Science", "Physics", "Chemistry", "Biology", "History", "Economics"]; 

  const [teachers, setTeachers] = useState([
    { name: "Ms. Tripti Mehra", subject: "English", image: "/avatars/t1.jpg", status: "Active" },
    { name: "Mr. Aditya Sharma", subject: "Mathematics", image: "/avatars/t2.jpg", status: "Active" },
    { name: "Ms. Rhea Kapoor", subject: "Science", image: "/avatars/t3.jpg", status: "On Leave" },
    { name: "Mr. Danish Khan", subject: "Computer Science", image: "/avatars/t4.jpg", status: "Active" },
  ]);

  const [filteredList, setFilteredList] = useState(teachers);
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ name: "", subject: "", status: "", image: "" });

  const openEdit = (index) => {
    setEditIndex(index);
    setForm(teachers[index]);
    setOpen(true);
  };

  const handleSave = () => {
    const updated = [...teachers];
    updated[editIndex] = form;
    setTeachers(updated);
    setFilteredList(updated);
    setOpen(false);
  };

  const handleDelete = (index) => {
    const updated = teachers.filter((_, i) => i !== index);
    setTeachers(updated);
    setFilteredList(updated);
  };

  const uploadImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm({ ...form, image: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSearch = (value) => {
    setSearch(value);
    const filtered = teachers.filter((t) =>
      t.name.toLowerCase().includes(value.toLowerCase()) ||
      t.subject.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <div className="flex flex-col gap-6 py-6 items-center justify-center w-full">

      {/* Search + Filter */}
      <div className="flex gap-4 w-full max-w-3xl">
        <Input
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search teacher or subject..."
        />

        <Select onValueChange={(v) => handleSearch(v)}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter Subject" />
          </SelectTrigger>
          <SelectContent>
            {subjectsList.map((sub, i) => (
              <SelectItem key={i} value={sub}>{sub}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredList.map((teacher, index) => (
        <Card key={index} className="w-full max-w-3xl shadow-xl border-neutral-700">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={teacher.image} alt={teacher.name} />
                <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg font-semibold">{teacher.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                <Badge className={`mt-2 w-fit ${teacher.status === "Active" ? "bg-green-600" : "bg-yellow-600"}`}>
                  {teacher.status}
                </Badge>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => openEdit(index)}>Edit</Button>
              <Button variant="destructive" onClick={() => handleDelete(index)}>Delete</Button>
            </div>
          </CardHeader>
        </Card>
      ))}

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitleUI>Edit Teacher</DialogTitleUI>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
            />

            <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjectsList.map((sub, i) => (
                  <SelectItem key={i} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="On Leave">On Leave</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Upload Image</p>
              <Input type="file" accept="image/*" onChange={uploadImage} />
              <Avatar className="h-20 w-20 mt-2">
                <AvatarImage src={form.image} />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
