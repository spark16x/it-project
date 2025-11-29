"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { School, Users, BookOpen, Settings } from "lucide-react";

import { motion } from "framer-motion";
import React from "react";

export default function Page() {
  // GSAP animations
  React.useEffect(() => {
    import("gsap").then(({ gsap }) => {
      gsap.from(".fade-up", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from(".card-anim", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
      });
    });
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-black to-blue-900 text-white flex flex-col items-center px-6 py-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-6 mt-10 fade-up"
      >
        <div className="flex justify-center">
          <School className="h-20 w-20 text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold tracking-wide">EDUDEL.LITE</h1>
        <p className="text-blue-200 text-lg">
          Fast. Modern. Smart school management for the future.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl">
            Login
          </Button>
          <Button
            variant="outline"
            className="border-blue-400 text-blue-300 hover:bg-blue-500/20 px-6 py-2 rounded-xl"
          >
            Register
          </Button>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-20 w-full">
        <Card className="bg-blue-950/40 border-blue-500/30 text-white backdrop-blur-md card-anim">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Users className="h-6 w-6 text-blue-400" /> Student Management
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200 text-sm">
            Track attendance, records, performance & more with ease.
          </CardContent>
        </Card>

        <Card className="bg-blue-950/40 border-blue-500/30 text-white backdrop-blur-md card-anim">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BookOpen className="h-6 w-6 text-blue-400" /> Academics
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200 text-sm">
            Manage timetables, subjects, exams, and reporting.
          </CardContent>
        </Card>

        <Card className="bg-blue-950/40 border-blue-500/30 text-white backdrop-blur-md card-anim">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Settings className="h-6 w-6 text-blue-400" /> Admin Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-200 text-sm">
            Powerful tools for school admins & staff with custom roles.
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center space-y-6 fade-up"
      >
        <h2 className="text-3xl font-semibold">
          Start Managing Your School Smarter
        </h2>
        <p className="text-blue-300">
          Join thousands of schools upgrading their workflows.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 text-lg rounded-xl">
          Get Started
        </Button>
      </motion.section>
    </main>
  );
}
