"use client"

import * as React from "react"
import {
  IconCamera,
  IconDashboard,
  IconUsers,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconSearch,
  IconSettings,
  IconInnerShadowTop,
} from "@tabler/icons-react"

import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useEffect, useState } from "react";

export function AppSidebar(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    let storedUser = localStorage.getItem("user")
    let user = {}

    try {
      user = JSON.parse(storedUser) || {}
    } catch {
      user = {}
    }

    const role = user?.role || "Teacher"

    // base nav
    const navMainItems = [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
      },
      {
        title: "Attendeces",
        url: "/dashboard/attendance",
        icon: IconUsers,
      },
      {
        title: "Students",
        url: "/dashboard/students",
        icon: IconUsers,
      },
    ]

    // 👉 If user is Principal, add Teachers tab
    if (role === "Principal") {
      navMainItems.push({
        title: "Teachers",
        url: "/dashboard/teachers",
        icon: IconUsers,
      })
    }

    setData({
      user: {
        name: user?.name || "Teacher",
        email: user?.email || "qutub@edudel.lite",
        avatar: user?.picture || "/avatars/shadcn.jpg",
        role,
      },
      navMain: navMainItems,
      navSecondary: [
        {
          title: "Settings",
          url: "#",
          icon: IconSettings,
        },
        {
          title: "Get Help",
          url: "#",
          icon: IconHelp,
        },
        {
          title: "Search",
          url: "#",
          icon: IconSearch,
        },
      ],
    })
  }, [])

  if (!data) return null

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Edudel.lite</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
