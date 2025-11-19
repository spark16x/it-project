
import "./globals.css";
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'


export default function RootLayout({ children }) {
  return (
          <SidebarProvider
            style={{
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            }}
          >
            <AppSidebar variant="inset" />
            {children}
          </SidebarProvider>
  );
}