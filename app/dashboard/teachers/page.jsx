"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IconSearch, IconUser } from "@tabler/icons-react";

export default function TeachersPage() {
  const teachers = [
    {
      name: "Ms. Tripti Mehra",
      subject: "English",
      image: "/avatars/t1.jpg",
      status: "Active",
    },
    {
      name: "Mr. Aditya Sharma",
      subject: "Mathematics",
      image: "/avatars/t2.jpg",
      status: "Active",
    },
    {
      name: "Ms. Rhea Kapoor",
      subject: "Science",
      image: "/avatars/t3.jpg",
      status: "On Leave",
    },
    {
      name: "Mr. Danish Khan",
      subject: "Computer Science",
      image: "/avatars/t4.jpg",
      status: "Active",
    },
  ];

  return (
    <main className="p-6 min-h-screen bg-neutral-900 text-white">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Teachers</h1>

        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <Input
              placeholder="Search teachers..."
              className="bg-neutral-800 border-neutral-700 pl-8"
            />
            <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
          </div>
          <Button>Add Teacher</Button>
        </div>
      </div>

      <Separator className="bg-neutral-700 mb-4" />

      {/* Teachers List */}
      <ScrollArea className="h-[70vh] pr-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachers.map((t, index) => (
            <Card
              key={index}
              className="bg-neutral-800 border-neutral-700 hover:bg-neutral-800/70 transition-all"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback><IconUser /></AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{t.name}</CardTitle>
                  <p className="text-sm text-neutral-400">{t.subject}</p>
                </div>
              </CardHeader>
              <CardContent>
                <Badge
                  variant={t.status === "Active" ? "default" : "secondary"}
                  className={
                    t.status === "Active" ? "bg-green-600" : "bg-yellow-600"
                  }
                >
                  {t.status}
                </Badge>

                <div className="mt-4 flex gap-2">
                  <Button variant="secondary" className="w-full">View</Button>
                  <Button variant="outline" className="w-full">Edit</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
}
