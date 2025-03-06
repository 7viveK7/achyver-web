"use client"

import { useEffect, useRef } from "react"

export default function SkillsRadarChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // In a real app, you would integrate Chart.js or D3.js to render a radar chart
    // This is a placeholder for the chart visualization
  }, [])

  const skills = [
    { name: "React", proficiency: 90, demand: 95 },
    { name: "TypeScript", proficiency: 85, demand: 92 },
    { name: "Next.js", proficiency: 82, demand: 90 },
    { name: "UI/UX", proficiency: 75, demand: 88 },
    { name: "Node.js", proficiency: 70, demand: 85 },
    { name: "GraphQL", proficiency: 60, demand: 80 },
  ]

  return (
    <div ref={chartRef} className="h-full">
      {/* Placeholder for the chart */}
      <div className="flex flex-col h-full justify-center">
        <div className="text-center text-muted-foreground mb-4">
          <p>Skills visualization would appear here with a proper chart library.</p>
          <p className="text-sm">Comparing your skill proficiency with market demand</p>
        </div>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{skill.name}</span>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-blue-500 bg-blue-50 px-2 py-0.5 rounded dark:bg-blue-900/20">
                    You: {skill.proficiency}%
                  </span>
                  <span className="text-green-500 bg-green-50 px-2 py-0.5 rounded dark:bg-green-900/20">
                    Market: {skill.demand}%
                  </span>
                </div>
              </div>
              <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
                <div
                  className="absolute top-0 left-0 h-full bg-green-500 rounded-full opacity-30"
                  style={{ width: `${skill.demand}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

