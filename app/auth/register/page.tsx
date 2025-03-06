"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Briefcase, User, ArrowRight, Github, Linkedin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const defaultTab = searchParams.get("type") === "company" ? "company" : "jobseeker"
  const [userType, setUserType] = useState<"jobseeker" | "company">(defaultTab as "jobseeker" | "company")

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Registration successful",
        description: `Your ${userType} account has been created. Welcome to CareerAI!`,
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
              "I found my dream job within two weeks of signing up. The AI-powered matching is incredibly accurate!"
            </p>
            <footer className="text-sm">Michael Chen, Software Engineer</footer>
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Sign up to get started with CareerAI</p>
          </div>

          <Tabs
            defaultValue={defaultTab}
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
                  <CardTitle>Job Seeker Registration</CardTitle>
                  <CardDescription>Create your job seeker account to find your dream job</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="name@example.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" required type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input id="confirm-password" required type="password" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
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
                            Creating account...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Create Account <ArrowRight className="ml-2 h-4 w-4" />
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
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle>Company Registration</CardTitle>
                  <CardDescription>Create your company account to find top talent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" placeholder="Acme Inc." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-email">Company Email</Label>
                        <Input id="company-email" placeholder="company@example.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-website">Company Website</Label>
                        <Input id="company-website" placeholder="https://example.com" type="url" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <select
                          id="company-size"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1001+">1001+ employees</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-password">Password</Label>
                        <Input id="company-password" required type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-confirm-password">Confirm Password</Label>
                        <Input id="company-confirm-password" required type="password" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="company-terms" required />
                        <label
                          htmlFor="company-terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
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
                            Creating account...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            Create Company Account <ArrowRight className="ml-2 h-4 w-4" />
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
                    Already have a company account?{" "}
                    <Link href="/auth/login?type=company" className="text-primary hover:underline">
                      Sign in
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

