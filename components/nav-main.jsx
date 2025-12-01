"use client"

import { IconCirclePlusFilled, IconMail } from "@tabler/icons-react"

import { Button } from '@/components/ui/button'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from "next/link"
import { useRouter } from 'nextjs-toploader/app'
import { useState } from "react";


export function NavMain({ items }) {
  const [openedTab, setOpenedTab] = useState('Dashboard')
  const router = useRouter()
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}  onClick={()=>{
            router.push(item.url) 
            setOpenedTab(item.title)  
            }} className={openedTab !== item.title && "bg-[calc(var(--background)/10)]"}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
               <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}