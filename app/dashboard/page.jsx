"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, Home, Users, BookOpen, Calendar, Settings } from "lucide-react";
import Link from "next/link";

const data = [{ name: "Class 9", students: 120 }, { name: "Class 10", students: 135 }, { name: "Class 11", students: 150 }, { name: "Class 12", students: 140 }, ];

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="w-full min-h-screen flex bg-gray-50 text-gray-900"> {/* Sidebar */} <aside className="h-full bg-white shadow-xl p-4 flex flex-col gap-4 fixed top-0 left-0 transition-all {open ? w-60 : w-16 }"> <Button variant="ghost" onClick={() => setOpen(!open)} className="mb-4"> <Menu /> </Button>

<nav className="flex flex-col gap-3">
      <Link href="#" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-xl">
        <Home className="w-5 h-5" />
        {open && <span>Dashboard</span>}
      </Link>
      <Link href="#" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-xl">
        <Users className="w-5 h-5" />
        {open && <span>Students</span>}
      </Link>
      <Link href="#" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-xl">
        <BookOpen className="w-5 h-5" />
        {open && <span>Classes</span>}
      </Link>
      <Link href="#" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-xl">
        <Calendar className="w-5 h-5" />
        {open && <span>Attendance</span>}
      </Link>
      <Link href="#" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-xl">
        <Settings className="w-5 h-5" />
        {open && <span>Settings</span>}
      </Link>
    </nav>
  </aside>

  {/* Main Content */}
  <main className="ml-16 w-full p-6">
    <h1 className="text-2xl font-bold mb-6">School Management Dashboard</h1>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Students</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">545</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teachers</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">42</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Classes</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">24</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Today</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold">91%</CardContent>
      </Card>
    </div>

    {/* Chart Section */}
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Students Per Class</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  </main>
</div>
    
  );
}