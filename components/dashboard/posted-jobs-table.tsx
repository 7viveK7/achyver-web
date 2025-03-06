import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Edit, Trash2, Users, BarChart3 } from "lucide-react"

export default function PostedJobsTable() {
  const jobs = [
    {
      id: "JOB-1234",
      title: "Senior Frontend Developer",
      postedDate: "Sep 12, 2023",
      expires: "Oct 12, 2023",
      status: "Active",
      applications: 45,
      views: 356,
    },
    {
      id: "JOB-1235",
      title: "Full Stack Developer",
      postedDate: "Sep 10, 2023",
      expires: "Oct 10, 2023",
      status: "Active",
      applications: 32,
      views: 289,
    },
    {
      id: "JOB-1236",
      title: "UX Designer",
      postedDate: "Sep 8, 2023",
      expires: "Oct 8, 2023",
      status: "Active",
      applications: 18,
      views: 210,
    },
    {
      id: "JOB-1237",
      title: "Product Manager",
      postedDate: "Aug 25, 2023",
      expires: "Sep 25, 2023",
      status: "Expiring Soon",
      applications: 28,
      views: 378,
    },
    {
      id: "JOB-1238",
      title: "DevOps Engineer",
      postedDate: "Aug 15, 2023",
      expires: "Sep 15, 2023",
      status: "Closed",
      applications: 22,
      views: 245,
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead className="hidden md:table-cell">Posted</TableHead>
            <TableHead className="hidden md:table-cell">Expires</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Applications</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell className="hidden md:table-cell">{job.postedDate}</TableCell>
              <TableCell className="hidden md:table-cell">{job.expires}</TableCell>
              <TableCell>
                <StatusBadge status={job.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex items-center gap-2">
                  <span className="flex items-center">
                    <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                    {job.applications}
                  </span>
                  <span className="flex items-center text-muted-foreground">
                    <BarChart3 className="mr-1 h-4 w-4" />
                    {job.views}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "Active":
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30"
        >
          Active
        </Badge>
      )
    case "Expiring Soon":
      return (
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30"
        >
          Expiring Soon
        </Badge>
      )
    case "Closed":
      return (
        <Badge
          variant="outline"
          className="bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30"
        >
          Closed
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

