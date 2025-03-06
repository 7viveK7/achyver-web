"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Bell, MessageCircle, Search, Settings, User, LogOut } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function DashboardHeader() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">
      {showSearch ? (
        <div className="flex w-full max-w-sm items-center">
          <Input type="search" placeholder="Search..." className="rounded-r-none focus-visible:ring-0" autoFocus />
          <Button
            type="submit"
            variant="default"
            className="rounded-l-none bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      ) : null}
      <div className={cn("ml-auto flex items-center gap-4", showSearch && "flex-1")}>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setShowSearch(!showSearch)}>
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MessageCircle className="h-5 w-5" />
          <span className="sr-only">Messages</span>
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Profile"
                className="rounded-full"
                width="32"
                height="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

