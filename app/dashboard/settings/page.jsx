'use client'
import { useState,useEffect } from "react";
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
  const { theme,setTheme } = useTheme()
  const [avatar, setAvatar] = useState("/avatar-placeholder.png");
  
  useEffect(() => {
    let user = localStorage.getItem("user");
    user = JSON.parse(user)
    setEmail(user.email);
    setRole(user.role);
    setAvatar(user.picture)
    
  })
  const uploadAvatar = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-background p-6">
      <Card className="w-full max-w-3xl p-4">
        <CardHeader>
          <CardTitle className="text-xl">Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Left Side Form */}
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
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="mt-2">Save Changes</Button>
          </div>

          {/* Right Side Avatar + Theme */}
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