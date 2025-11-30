import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SplashScreen from "@/components/SplashScreen.jsx";
import ClientNavWrapper from "@/components/navWrapper.jsx";
import { Toaster } from "@/components/ui/toaster"
import NextTopLoader from 'nextjs-toploader';

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
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            easing="ease"
            speed={200}
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
              <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
                />
          <SplashScreen />
          {/* client component handles pathname + hiding nav */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}