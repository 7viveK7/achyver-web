import type React from "react"
import type { Metadata } from "next"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import DashboardHeader from "@/components/dashboard/dashboard-header"

export const metadata: Metadata = {
  title: "Dashboard - Achyver",
  description: "Manage your job applications and profile on Achyver",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="relative z-10">{children}</div>
        </main>
      </div>
    </div>
  )
}

