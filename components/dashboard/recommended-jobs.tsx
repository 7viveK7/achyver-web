import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Zap, ChevronRight } from "lucide-react"

export default function RecommendedJobs() {
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      postedAt: "2 days ago",
      match: 95,
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "InnovateSoft",
      location: "New York, NY (Hybrid)",
      salary: "$115,000 - $145,000",
      postedAt: "1 week ago",
      match: 92,
    },
    {
      id: "3",
      title: "React Developer",
      company: "WebTech Solutions",
      location: "Austin, TX (Remote)",
      salary: "$110,000 - $135,000",
      postedAt: "3 days ago",
      match: 89,
    },
  ]

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-muted/50 rounded-lg p-4 hover:border-primary/20 transition-all hover:shadow-md"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-sm text-primary">{job.company}</p>
            </div>
            <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
              <Zap className="h-4 w-4 mr-1" />
              {job.match}% Match
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 text-primary/70" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2 text-primary/70" />
              {job.postedAt}
            </div>
            <p className="text-sm font-medium">{job.salary}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-primary/5 text-primary text-xs">
                Full-time
              </Badge>
              <Badge variant="outline" className="bg-primary/5 text-primary text-xs">
                Remote
              </Badge>
            </div>
            <Button size="sm" variant="ghost" className="gap-1 text-primary hover:text-primary hover:bg-primary/10">
              View Job <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

