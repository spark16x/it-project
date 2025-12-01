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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="items-center justify-center">{
      teachers.map((teacher)=>{
        <Card className="w-full max-w-3xl  shadow-xl border-neutral-700">
         <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-xl">
             {teacher.name}
            </CardTitle>
            </CardHeader>
      </Card>
      })
    }
      
    </div>
  );
}
