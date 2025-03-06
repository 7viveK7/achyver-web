import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Sparkles,
  Zap,
  Brain,
  TrendingUp,
  Search,
  Users,
  Shield,
} from "lucide-react"
import JobCard from "@/components/job-card"
import AIFeatureCard from "@/components/ai-feature-card"
import TrendingSkillsChart from "@/components/trending-skills-chart"
import { featuredJobs } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex rounded-md px-3.5 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20 mb-2">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  AI-Powered Job Portal
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Find Your Dream Job with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Let our AI match you with the perfect job. Upload your resume or enter your skills, and we'll do the
                  rest.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard/jobs">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                    Browse Jobs
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>AI-Powered Matching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>10,000+ Jobs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>Free Resume Analysis</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full border-primary/20 bg-background/60 backdrop-blur-sm shadow-xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Quick Job Search</h3>
                      <p className="text-sm text-muted-foreground">Enter your skills or job title to get started</p>
                    </div>
                    <div className="space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <input
                          className="w-full rounded-md border border-input bg-background px-10 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Job title, skills, or keywords"
                          type="search"
                        />
                        <Button className="absolute right-1 top-1 h-[calc(100%-8px)] rounded-md bg-primary px-3 text-primary-foreground hover:bg-primary/90">
                          Search
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          React
                        </Badge>
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          Full Stack
                        </Badge>
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          Remote
                        </Badge>
                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                          Product Manager
                        </Badge>
                      </div>
                      <div className="text-center">
                        <Link href="/auth/register">
                          <Button variant="link" className="text-primary">
                            Or upload your resume for better matches
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="inline-flex rounded-md px-3.5 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <Briefcase className="mr-1 h-3.5 w-3.5" />
                Featured Jobs
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover Opportunities</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse through our curated list of top job opportunities from leading companies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredJobs.slice(0, 6).map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/dashboard/jobs">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="inline-flex rounded-md px-3.5 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <Zap className="mr-1 h-3.5 w-3.5" />
                AI-Powered Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Supercharge Your Job Search
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our AI-powered tools help you find the perfect job and stand out from the crowd.
              </p>
            </div>
          </div>

          <Tabs defaultValue="jobseekers" className="w-full mt-8">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="jobseekers">For Job Seekers</TabsTrigger>
                <TabsTrigger value="employers">For Employers</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="jobseekers" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AIFeatureCard
                  icon={Brain}
                  title="AI Profile Enhancement"
                  description="Enter minimal details and our AI will enhance your profile using LinkedIn and social media insights."
                  gradient="from-blue-500 to-purple-600"
                />
                <AIFeatureCard
                  icon={Zap}
                  title="Automated Job Applications"
                  description="Let our AI apply to jobs on your behalf with personalized cover letters tailored to each position."
                  gradient="from-purple-500 to-pink-600"
                />
                <AIFeatureCard
                  icon={TrendingUp}
                  title="Skill Gap Analysis"
                  description="Identify skills you need to develop to qualify for your dream jobs and get personalized learning resources."
                  gradient="from-orange-500 to-red-600"
                />
                <AIFeatureCard
                  icon={Sparkles}
                  title="Resume Makeover"
                  description="Enter a few details and get a standout resume before you finish your coffee."
                  gradient="from-green-500 to-emerald-600"
                />
                <AIFeatureCard
                  icon={CheckCircle}
                  title="Interview Preparation"
                  description="AI-generated interview questions and answers based on the job description and your profile."
                  gradient="from-cyan-500 to-blue-600"
                />
                <AIFeatureCard
                  icon={Shield}
                  title="Premium Job Access"
                  description="Subscribe for exclusive access to high-paying jobs and priority application processing."
                  gradient="from-pink-500 to-rose-600"
                />
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/auth/register">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                    Sign Up as Job Seeker
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="employers" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AIFeatureCard
                  icon={Search}
                  title="AI Candidate Matching"
                  description="Our AI analyzes your job requirements and finds the perfect candidates from our talent pool."
                  gradient="from-blue-500 to-purple-600"
                />
                <AIFeatureCard
                  icon={Users}
                  title="Premium Hiring Service"
                  description="Subscribe for a fixed-cost package to get the top 10 handpicked candidates ready for interviews."
                  gradient="from-purple-500 to-pink-600"
                />
                <AIFeatureCard
                  icon={Brain}
                  title="Candidate Insights"
                  description="View AI-enriched resumes with skills, experience, and social media insights for better hiring decisions."
                  gradient="from-orange-500 to-red-600"
                />
                <AIFeatureCard
                  icon={Briefcase}
                  title="Job Description Generator"
                  description="Generate compelling job descriptions that attract the right candidates with just a few clicks."
                  gradient="from-green-500 to-emerald-600"
                />
                <AIFeatureCard
                  icon={TrendingUp}
                  title="Recruitment Analytics"
                  description="Get detailed insights into your hiring process and optimize your recruitment strategy."
                  gradient="from-cyan-500 to-blue-600"
                />
                <AIFeatureCard
                  icon={Shield}
                  title="Company Branding"
                  description="Enhance your employer brand with highlighted job listings and reputation scores."
                  gradient="from-pink-500 to-rose-600"
                />
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/auth/register?type=company">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                    Sign Up as Employer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trending Skills Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="inline-flex rounded-md px-3.5 py-1.5 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <TrendingUp className="mr-1 h-3.5 w-3.5" />
                Market Insights
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trending Skills</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay ahead of the curve with insights into the most in-demand skills in the job market.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <TrendingSkillsChart />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/dashboard/profile">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                Analyze Your Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
                Ready to transform your career?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Achyver Today</h2>
              <p className="text-muted-foreground md:text-xl">
                Whether you're looking for your next opportunity or hiring top talent, our AI-powered platform makes it
                easier than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity"
                  >
                    Sign Up Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="grid gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <Briefcase className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-bold">10,000+</h3>
                        <p className="text-sm text-muted-foreground">Active Jobs</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-bold">5,000+</h3>
                        <p className="text-sm text-muted-foreground">Companies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-bold">95%</h3>
                        <p className="text-sm text-muted-foreground">Success Rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <Zap className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-bold">2x</h3>
                        <p className="text-sm text-muted-foreground">Faster Hiring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

