import { Button } from "@/components/ui/button"
import { Briefcase, Eye, MessageCircle, CheckCircle, Star } from "lucide-react"

export default function RecentActivityList() {
  const activities = [
    {
      id: "1",
      type: "view",
      content: "You viewed Senior Frontend Developer at TechCorp Inc.",
      time: "2 hours ago",
      icon: Eye,
    },
    {
      id: "2",
      type: "application",
      content: "You applied for Full Stack Developer at InnovateSoft",
      time: "1 day ago",
      icon: Briefcase,
    },
    {
      id: "3",
      type: "message",
      content: "You received a message from Sarah at TechCorp Inc.",
      time: "2 days ago",
      icon: MessageCircle,
    },
    {
      id: "4",
      type: "interview",
      content: "Interview scheduled with ProductWave for Product Manager role",
      time: "3 days ago",
      icon: CheckCircle,
    },
    {
      id: "5",
      type: "saved",
      content: "You saved UX Designer job at DesignHub",
      time: "5 days ago",
      icon: Star,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex gap-3">
          <div
            className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            ${activity.type === "view" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : ""}
            ${activity.type === "application" ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" : ""}
            ${activity.type === "message" ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" : ""}
            ${activity.type === "interview" ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" : ""}
            ${activity.type === "saved" ? "bg-primary/10 text-primary" : ""}
          `}
          >
            <activity.icon className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm">{activity.content}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
      <Button variant="ghost" className="w-full text-sm mt-2">
        View All Activity
      </Button>
    </div>
  )
}

