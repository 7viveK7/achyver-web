"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { trendingSkills } from "@/lib/data"

export default function TrendingSkillsChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return
    // In a real app, you would use a charting library like Chart.js or D3.js
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-muted/50">
        <CardContent className="p-6">
          <div className="space-y-6">
            {trendingSkills.slice(0, 4).map((skill, index) => (
              <div key={index} className="space-y-2 group">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                    +{skill.growth}% growth
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-purple-600 h-2.5 rounded-full transition-all duration-500 group-hover:from-primary/80 group-hover:to-purple-600/80"
                    style={{ width: `${skill.demand}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-muted/50">
        <CardContent className="p-6">
          <div className="space-y-6">
            {trendingSkills.slice(4, 8).map((skill, index) => (
              <div key={index} className="space-y-2 group">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                    +{skill.growth}% growth
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-purple-600 h-2.5 rounded-full transition-all duration-500 group-hover:from-primary/80 group-hover:to-purple-600/80"
                    style={{ width: `${skill.demand}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

