'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes"

export default function SettingsPage() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const { theme, setTheme } = useTheme();
  const [avatar, setAvatar] = useState(
    "https://lh3.googleusercontent.com/a/ACg8ocLr_DUapNEjmKjJcMn0kyhRxojtczcMsDl_fO2wQ9WIzDBul-MN=s96-c"
  );

  // ✅ FIXED useEffect — prevents infinite re-renders
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) return;

    try {
      user = JSON.parse(user);
      setEmail(user.email || "");
      setRole(user.role || "student");
      setAvatar(user.picture || avatar);
    } catch (err) {
      console.error("Invalid user object", err);
    }
  }, []);

  // Avatar Upload
  const uploadAvatar = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-background p-6">
      <Card className="w-full max-w-3xl p-4">
        <CardHeader>
          <CardTitle className="text-xl">Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <Label>Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Teacher">Teacher</SelectItem>
                  <SelectItem value="Principal">Principal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-2">
              <Button>Save Changes</Button>

              {/* 🔥 Logout Button */}
              <Button variant="destructive" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border">
                <Image src={avatar} alt="avatar" fill className="object-cover" />
              </div>
              <Input type="file" className="w-40" onChange={uploadAvatar} />
            </div>

            <div className="flex flex-col items-center gap-2 p-4 w-full rounded-xl border">
              <Label>Theme</Label>
              <div className="flex items-center gap-3">
                <Switch
                  checked={theme === "light"}
                  onCheckedChange={(v) => setTheme(v ? "light" : "dark")}
                />
                <span>{theme === "light" ? "Light" : "Dark"}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
