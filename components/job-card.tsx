import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bookmark, Building2, MapPin, Clock, Zap } from "lucide-react"

interface Job {
  id: string
  title: string
  company: string
  logo?: string
  location: string
  salary: string
  type: string
  tags: string[]
  postedAt: string
  aiMatch?: boolean
  matchPercentage?: number
  isSaved?: boolean
  isApplied?: boolean
}

interface JobCardProps {
  job: Job
  index: number
}

export default function JobCard({ job, index }: JobCardProps) {
  return (
    <Card
      className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted/50 hover:border-primary/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
          {job.logo ? (
            <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-8 h-8 rounded" />
          ) : (
            <Building2 className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{job.title}</h3>
          <p className="text-muted-foreground">{job.company}</p>
        </div>
        {job.aiMatch && job.matchPercentage && (
          <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4 mr-1" />
            {job.matchPercentage}% Match
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary/70" />
            {job.location}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-primary/70" />
            {job.postedAt}
          </div>
          <div className="font-medium text-lg text-primary">{job.salary}</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/5 hover:bg-primary/10 text-primary transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        <Link href={`/dashboard/jobs/${job.id}`} className="flex-1">
          <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
            {job.isApplied ? "View Application" : "Apply Now"}
          </Button>
        </Link>
        <Button
          variant="outline"
          size="icon"
          className={`hover:bg-primary/10 hover:text-primary transition-colors ${job.isSaved ? "text-primary" : ""}`}
        >
          <Bookmark className={`h-4 w-4 ${job.isSaved ? "fill-current" : ""}`} />
        </Button>
      </CardFooter>
    </Card>
  )
}

