"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Briefcase, Menu, X } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function MainNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              CareerAI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/dashboard/jobs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Find Jobs</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Job Seekers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-purple-600/20 p-6 no-underline outline-none focus:shadow-md"
                          href="/dashboard"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">AI-Powered Job Search</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Let our AI find the perfect job match based on your skills and preferences.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/dashboard/profile" title="Profile Enhancement">
                      AI-powered profile optimization to stand out to employers.
                    </ListItem>
                    <ListItem href="/dashboard/jobs" title="Job Recommendations">
                      Personalized job suggestions based on your skills and experience.
                    </ListItem>
                    <ListItem href="/pricing" title="Premium Features">
                      Unlock advanced features to boost your job search success.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>For Employers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-purple-600/20 p-6 no-underline outline-none focus:shadow-md"
                          href="/dashboard/company"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">AI Talent Matching</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Find the perfect candidates with our AI-powered matching system.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/dashboard/company" title="Post a Job">
                      Create and manage job listings to attract top talent.
                    </ListItem>
                    <ListItem href="/dashboard/company" title="Candidate Search">
                      Search and filter candidates based on skills and experience.
                    </ListItem>
                    <ListItem href="/pricing?type=company" title="Premium Services">
                      Access advanced hiring tools and priority support.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/dashboard/jobs" className="text-sm font-medium hover:text-primary">
                Find Jobs
              </Link>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium hover:text-primary">
                  For Job Seekers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="mt-2 space-y-2 pl-4">
                  <Link href="/dashboard" className="block text-sm text-muted-foreground hover:text-primary">
                    Dashboard
                  </Link>
                  <Link href="/dashboard/profile" className="block text-sm text-muted-foreground hover:text-primary">
                    Profile Enhancement
                  </Link>
                  <Link href="/dashboard/jobs" className="block text-sm text-muted-foreground hover:text-primary">
                    Job Recommendations
                  </Link>
                  <Link href="/pricing" className="block text-sm text-muted-foreground hover:text-primary">
                    Premium Features
                  </Link>
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium hover:text-primary">
                  For Employers
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="mt-2 space-y-2 pl-4">
                  <Link href="/dashboard/company" className="block text-sm text-muted-foreground hover:text-primary">
                    Company Dashboard
                  </Link>
                  <Link href="/dashboard/company" className="block text-sm text-muted-foreground hover:text-primary">
                    Post a Job
                  </Link>
                  <Link href="/dashboard/company" className="block text-sm text-muted-foreground hover:text-primary">
                    Candidate Search
                  </Link>
                  <Link href="/pricing?type=company" className="block text-sm text-muted-foreground hover:text-primary">
                    Premium Services
                  </Link>
                </div>
              </details>
              <Link href="/about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link href="/auth/login">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

