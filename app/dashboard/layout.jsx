'use client';
import { AppSidebar } from '@/components/app-sidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
import { SiteHeader } from '@/components/site-header'
import {
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar'
import SigninBtn from '@/components/SigninBtn.jsx';
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [user, setUser] = useState(false)
  useEffect(() => {
    let user = localStorage.getItem("user");
    setUser(!!user)
    
  })
  return (
     <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
             {user ? children : <SigninBtn/>}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider> 
  );
}