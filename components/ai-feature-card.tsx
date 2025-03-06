import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface AIFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient?: string
  index?: number
}

export default function AiFeatureCard({
  icon: Icon,
  title,
  description,
  gradient = "from-primary to-purple-600",
  index = 0,
}: AIFeatureCardProps) {
  return (
    <Card
      className="h-full border-muted/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient}/20 flex items-center justify-center mb-4 group-hover:${gradient}/30 transition-colors`}
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

