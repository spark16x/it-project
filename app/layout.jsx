import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


export const metadata = {
  title: "Arcfuse",
  description: "Unify all your social platforms in one space.",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body class="w-full h-screen" >{children}</body>
      </ThemeProvider>
    </html>
  );
}