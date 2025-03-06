import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Briefcase, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import JobCard from "@/components/job-card"
import { featuredJobs } from "@/lib/data"

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Find Jobs</h1>
        <p className="text-muted-foreground">Search and apply for jobs that match your skills and preferences.</p>
      </div>

      <Card className="border-muted/50">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Job title, skills, or keywords"
                className="pl-10 h-12 rounded-xl border-muted/50 focus:border-primary transition-colors"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Location (city or remote)"
                className="pl-10 h-12 rounded-xl border-muted/50 focus:border-primary transition-colors"
              />
            </div>
            <Button className="h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
              Search Jobs
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-3">Filters:</span>
              <Button variant="outline" size="sm" className="gap-2 rounded-full border-primary/20">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </div>
            <Select defaultValue="fullTime">
              <SelectTrigger className="w-auto h-8 text-sm rounded-full border-primary/20">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full-time</SelectItem>
                <SelectItem value="partTime">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-auto h-8 text-sm rounded-full border-primary/20">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid-Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="relevance">
              <SelectTrigger className="w-auto h-8 text-sm rounded-full border-primary/20">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary">Salary (High to Low)</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="outline" className="rounded-full bg-primary/5 text-primary border-primary/20">
              Remote <span className="ml-1 cursor-pointer">×</span>
            </Badge>
            <Badge variant="outline" className="rounded-full bg-primary/5 text-primary border-primary/20">
              Tech <span className="ml-1 cursor-pointer">×</span>
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
        </TabsList>

        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">125</span> jobs matching your criteria
        </div>

        <TabsContent value="all" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
            {/* Duplicate some jobs to fill the grid */}
            {featuredJobs.slice(0, 3).map((job, index) => (
              <JobCard key={`extra-${job.id}`} job={job} index={index + 6} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full gap-2">
              Load More Jobs
              <Briefcase className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs
              .filter((job) => job.aiMatch)
              .map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.slice(0, 2).map((job, index) => (
              <JobCard key={job.id} job={{ ...job, isSaved: true }} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applied" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.slice(2, 4).map((job, index) => (
              <JobCard key={job.id} job={{ ...job, isApplied: true }} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

