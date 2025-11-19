import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SplashScreen from "@/components/SplashScreen.jsx";
import ClientNavWrapper from "@/components/navWrapper.jsx";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Edudel.lite",
  description: "School mock website",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="7SnpTJD94MylkjVp3A2GY9wDF1Xhvs1yLkq_AH7nJxQ"
        />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>

      <body className="w-full h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />

          {/* client component handles pathname + hiding nav */}
          <ClientNavWrapper />

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
