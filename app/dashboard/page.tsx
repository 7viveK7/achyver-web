import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, TrendingUp, Users, ArrowUpRight, CheckCircle2, AlertCircle, HourglassIcon } from "lucide-react"
import ApplicationsTable from "@/components/dashboard/applications-table"
import RecommendedJobs from "@/components/dashboard/recommended-jobs"
import SkillsRadarChart from "@/components/dashboard/skills-radar-chart"
import RecentActivityList from "@/components/dashboard/recent-activity-list"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Sarah! Here's what's happening with your job search.</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
          Find New Jobs
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Active Applications</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">+2 this week</p>
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
              <p className="text-sm font-medium text-muted-foreground">Interviews Scheduled</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Next: Tomorrow, 10 AM</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Jobs Viewed</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">48</p>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+24%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted/50 hover:border-primary/20 transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-y-0">
              <p className="text-sm font-medium text-muted-foreground">Profile Views</p>
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold">28</p>
                <p className="text-xs text-muted-foreground">+5 from recruiters</p>
              </div>
              <div className="text-xs text-green-500 flex items-center bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-4">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="mb-2">
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="recommended">Recommended Jobs</TabsTrigger>
            </TabsList>
            <TabsContent value="applications">
              <Card className="border-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle>Your Applications</CardTitle>
                  <CardDescription>Track the status of your job applications.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Accepted: 2</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                      <HourglassIcon className="h-4 w-4" />
                      <span>Pending: 8</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm bg-red-500/10 text-red-500 px-3 py-1 rounded-full">
                      <AlertCircle className="h-4 w-4" />
                      <span>Rejected: 2</span>
                    </div>
                  </div>
                  <ApplicationsTable />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recommended">
              <Card className="border-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle>AI Recommended Jobs</CardTitle>
                  <CardDescription>
                    Personalized job recommendations based on your skills and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecommendedJobs />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-2 lg:col-span-3 space-y-6">
          <Card className="border-muted/50">
            <CardHeader className="pb-2">
              <CardTitle>Skills Analysis</CardTitle>
              <CardDescription>How your skills match with market demand.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <SkillsRadarChart />
              </div>
            </CardContent>
          </Card>

          <Card className="border-muted/50">
            <CardHeader className="pb-2">
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent interactions on the platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivityList />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

