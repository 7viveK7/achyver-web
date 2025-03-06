import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MainNav from "@/components/main-nav"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Achyver - AI-Powered Job Portal",
  description: "Find your dream job or hire top talent with our AI-powered job portal.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2023 Achyver. All rights reserved.
                </p>
                <nav className="flex items-center space-x-4 text-sm">
                  <a href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </a>
                  <a href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </a>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </nav>
              </div>
            </footer>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'