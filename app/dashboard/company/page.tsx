import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Briefcase, TrendingUp, Clock, Plus, BarChart4, CheckCircle2, ClipboardList } from "lucide-react"
import PostedJobsTable from "@/components/dashboard/posted-jobs-table"
import ApplicationsTable from "@/components/dashboard/applications-table"
import CandidatesList from "@/components/dashboard/candidates-list"

export default function CompanyDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Company Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, TechCorp Inc! Manage your job postings and applications.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
          <Plus className="mr-2 h-4 w-4" /> Post a New Job
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Active Job Postings</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">+3 this month</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+15%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <ClipboardList className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">156</p>
                <p className="text-xs text-muted-foreground">+42 this week</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+28%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Interview Scheduled</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">24</p>
                <p className="text-xs text-muted-foreground">Next: Tomorrow, 2 PM</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Job Views</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <BarChart4 className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">4.8K</p>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+32%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-4">
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="mb-2">
              <TabsTrigger value="jobs">Posted Jobs</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="jobs">
              <Card className="border-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle>Your Job Postings</CardTitle>
                  <CardDescription>Manage all your active and closed job listings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <PostedJobsTable />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="applications">
              <Card className="border-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Review and manage candidate applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>New: 34</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span>In Review: 23</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm bg-green-500/10 text-green-500 px-3 py-1 rounded-full">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Shortlisted: 12</span>
                    </div>
                  </div>
                  <ApplicationsTable isEmployer={true} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-2 lg:col-span-3 space-y-6">
          <Card className="border-muted/50">
            <CardHeader className="pb-2">
              <CardTitle>Top Candidates</CardTitle>
              <CardDescription>Highly qualified candidates for your jobs.</CardDescription>
            </CardHeader>
            <CardContent>
              <CandidatesList />
            </CardContent>
          </Card>

          <Card className="border-muted/50">
            <CardHeader className="pb-2">
              <CardTitle>Recruitment Analytics</CardTitle>
              <CardDescription>Key metrics about your recruitment process.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Application Completion Rate</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Average Time to Hire</span>
                  <span className="font-medium">18 days</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Interview to Offer Ratio</span>
                  <span className="font-medium">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Offer Acceptance Rate</span>
                  <span className="font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

