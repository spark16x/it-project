'use client'
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

// shadcn/ui components (adjust paths if your project uses a different structure)
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Icons (lucide-react commonly used with shadcn)
import { IconSchool, IconUsers, IconBook, IconCalendar } from "@tabler/icons-react";

export default function Home() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP entry timeline for hero elements
    const tl = gsap.timeline();

    tl.from(heroRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    })
      .from(
        cardsRef.current,
        {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=" + 0.4
      )
      .from(
        ".quick-actions > *",
        { y: 12, opacity: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" },
        "-=" + 0.3
      );

    // small hover effect for cards (subtle)
    cardsRef.current.forEach((el) => {
      if (!el) return;
      const hover = gsap.to(el, { scale: 1.02, paused: true, duration: 0.2 });
      el.addEventListener("mouseenter", () => hover.play());
      el.addEventListener("mouseleave", () => hover.reverse());
    });

    return () => {
      tl.kill();
      // cleanup listeners
      cardsRef.current.forEach((el) => {
        if (!el) return;
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const features = [
    {
      title: "Student Management",
      desc: "Profiles, attendance, grades — everything organized.",
      icon: <IconUsers size={18} />,
    },
    {
      title: "Academic Planner",
      desc: "Timetables, exams, syllabus planner.",
      icon: <IconCalendar size={18} />,
    },
    {
      title: "Library & Resources",
      desc: "E-books, issue tracking, and book inventory.",
      icon: <IconBook size={18} />,
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-slate-100 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg">
              <IconSchool className="text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold">Edudel.lite</div>
              <div className="text-xs text-slate-400">Quthub Mehruali School</div>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline">Dashboard</Button>
          <Button variant="ghost" className="hidden sm:inline">Students</Button>
          <Button variant="ghost">Login</Button>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Edudel.lite — School management for <span className="text-cyan-400">Quthub Mehruali</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-300 max-w-xl"
            >
              A lightweight, fast admin panel for teachers, students and parents — attendance, grades, library, and
              academic planning in one place.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Get Started</Button>
              <Button variant="outline">Request Demo</Button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/avatars/teacher.jpg" alt="Head Teacher" />
                <AvatarFallback>TM</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">Ms. Tripti Mehra</div>
                <div className="text-xs text-slate-400">Principal, Quthub Mehruali School</div>
              </div>
            </div>

            <div className="mt-6">
              <form className="flex gap-2 max-w-md">
                <Input placeholder="School code or e-mail" />
                <Button type="submit">Join</Button>
              </form>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Card
                  key={f.title}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="p-4 bg-gradient-to-br from-slate-800/60 to-slate-800/40 border border-slate-700"
                >
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-slate-800/40 flex items-center justify-center">{f.icon}</div>
                        <CardTitle className="text-sm">{f.title}</CardTitle>
                      </div>
                      <Badge variant="secondary">Live</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 mt-3 text-slate-300">{f.desc}</CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 quick-actions grid grid-cols-3 gap-3 text-sm">
              <Button variant="ghost" className="flex flex-col items-center p-3">
                <IconUsers />
                <span className="mt-1">Roll Call</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-3">
                <IconBook />
                <span className="mt-1">Library</span>
              </Button>
              <Button variant="ghost" className="flex flex-col items-center p-3">
                <IconCalendar />
                <span className="mt-1">Events</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4 bg-slate-800/40 border border-slate-700">
            <CardHeader className="p-0">
              <CardTitle className="text-sm">Today's Overview</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-3 text-slate-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">420</div>
                  <div className="text-xs text-slate-400">Students present</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-slate-400">Teachers on duty</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 bg-slate-800/40 border border-slate-700">
            <CardHeader className="p-0">
              <CardTitle className="text-sm">Upcoming</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-3 text-slate-300">Unit test — Class 10 (Dec 10), PTM — Jan 12</CardContent>
          </Card>

          <Card className="p-4 bg-slate-800/40 border border-slate-700">
            <CardHeader className="p-0">
              <CardTitle className="text-sm">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-3 text-slate-300">Reports · Fee Portal · Notices</CardContent>
          </Card>
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-sm text-slate-400">© {new Date().getFullYear()} Edudel.lite — Quthub Mehruali School</div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Privacy</Button>
            <Button variant="ghost" size="sm">Contact</Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
