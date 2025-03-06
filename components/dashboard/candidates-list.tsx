import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, MessageCircle, CheckCircle, XCircle, Star } from "lucide-react"

export default function CandidatesList() {
  const candidates = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      match: 95,
      skills: ["React", "TypeScript", "Next.js"],
      applied: "2 days ago",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Full Stack Developer",
      match: 92,
      skills: ["Node.js", "React", "MongoDB"],
      applied: "1 week ago",
    },
    {
      id: "3",
      name: "Priya Patel",
      role: "UX Designer",
      match: 88,
      skills: ["Figma", "UI Design", "User Research"],
      applied: "3 days ago",
    },
  ]

  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="border border-muted/50 rounded-lg p-4 hover:border-primary/20 transition-all hover:shadow-md"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="text-white font-medium">{candidate.name.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{candidate.name}</h3>
                <div className="flex items-center bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {candidate.match}% Match
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{candidate.role}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {candidate.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Applied {candidate.applied}</span>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-7 w-7">
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-green-600 hover:text-green-700 hover:bg-green-50"
                  >
                    <CheckCircle className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-7 w-7 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <XCircle className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button variant="ghost" className="w-full text-sm mt-2">
        View All Candidates
      </Button>
    </div>
  )
}

