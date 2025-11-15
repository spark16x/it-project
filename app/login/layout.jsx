import { ThemeProvider } from "@/components/theme-provider"
import "/app/globals.css";
import  SplashScreen  from '@/components/SplashScreen.jsx';

export const metadata = {
  title: "Edudel.lite | Login",
  description: "School mock website",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="7SnpTJD94MylkjVp3A2GY9wDF1Xhvs1yLkq_AH7nJxQ" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body class="w-full h-screen" >
        <SplashScreen />
        {children}
        </body>
      </ThemeProvider>
    </html>
  );
}