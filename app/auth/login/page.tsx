"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Briefcase, User, ArrowRight, Github, Linkedin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState<"jobseeker" | "company">("jobseeker")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Login successful",
        description: `Welcome back to CareerAI!`,
      })

      // Redirect based on user type
      if (userType === "company") {
        router.push("/dashboard/company")
      } else {
        router.push("/dashboard")
      }
    }, 1500)
  }

  return (
    <div className="container relative flex-col items-center justify-center min-h-screen grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-purple-700"></div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Briefcase className="mr-2 h-6 w-6" />
          <span className="text-xl font-bold">CareerAI</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "CareerAI has completely transformed our hiring process. We've reduced our time-to-hire by 60% and found
              better quality candidates."
            </p>
            <footer className="text-sm">Sarah Johnson, CTO at TechCorp</footer>
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
          </div>

          <Tabs
            defaultValue="jobseeker"
            className="w-full"
            onValueChange={(value) => setUserType(value as "jobseeker" | "company")}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jobseeker">
                <User className="mr-2 h-4 w-4" />
                Job Seeker
              </TabsTrigger>
              <TabsTrigger value="company">
                <Briefcase className="mr-2 h-4 w-4" />
                Company
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jobseeker">
              <Card>
                <CardHeader>
                  <CardTitle>Job Seeker Login</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="name@example.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link href="/auth/reset-password" className="text-xs text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="password" required type="password" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-purple-600"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Signing in...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Sign In <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mt-2">
                    Don't have an account?{" "}
                    <Link href="/auth/register" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Company Login</CardTitle>
                  <CardDescription>Enter your company credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-email">Email</Label>
                        <Input id="company-email" placeholder="company@example.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="company-password">Password</Label>
                          <Link href="/auth/reset-password" className="text-xs text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input id="company-password" required type="password" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="company-remember" />
                        <label
                          htmlFor="company-remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-purple-600"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Signing in...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Sign In <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mt-2">
                    Don't have a company account?{" "}
                    <Link href="/auth/register?type=company" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

