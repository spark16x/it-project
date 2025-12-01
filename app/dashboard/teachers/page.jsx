"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 items-center justify-center">
      {teachers.map((teacher, index) => (
        <Card
          key={index}
          className="w-full max-w-3xl shadow-xl border-neutral-700"
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-14 w-14">
              <AvatarImage src={teacher.image} alt={teacher.name} />
              <AvatarFallback>
                {teacher.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <CardTitle className="text-lg font-semibold">
                {teacher.name}
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                {teacher.subject}
              </p>

              <Badge
                className={`mt-2 w-fit ${
                  teacher.status === "Active"
                    ? "bg-green-600"
                    : "bg-yellow-600"
                }`}
              >
                {teacher.status}
              </Badge>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
