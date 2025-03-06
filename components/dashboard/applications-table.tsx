import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, MessageCircle, CheckCircle, XCircle, Clock } from "lucide-react"

interface ApplicationsTableProps {
  isEmployer?: boolean
}

export default function ApplicationsTable({ isEmployer = false }: ApplicationsTableProps) {
  const applications = [
    {
      id: "APP-1234",
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "Sep 12, 2023",
      status: "Interview",
      match: "95%",
    },
    {
      id: "APP-1235",
      role: "Full Stack Developer",
      company: "InnovateSoft",
      appliedDate: "Sep 10, 2023",
      status: "Applied",
      match: "89%",
    },
    {
      id: "APP-1236",
      role: "UX Designer",
      company: "DesignHub",
      appliedDate: "Sep 8, 2023",
      status: "Rejected",
      match: "78%",
    },
    {
      id: "APP-1237",
      role: "Product Manager",
      company: "ProductWave",
      appliedDate: "Sep 5, 2023",
      status: "Offer",
      match: "92%",
    },
    {
      id: "APP-1238",
      role: "DevOps Engineer",
      company: "CloudTech",
      appliedDate: "Sep 1, 2023",
      status: "Applied",
      match: "87%",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{isEmployer ? "Candidate" : "Job"}</TableHead>
            <TableHead>{isEmployer ? "Role" : "Company"}</TableHead>
            <TableHead className="hidden md:table-cell">Applied On</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell className="font-medium">{isEmployer ? "Sarah Johnson" : application.role}</TableCell>
              <TableCell>
                {isEmployer ? application.role : application.company}
                {!isEmployer && <div className="text-xs text-primary mt-1">Match: {application.match}</div>}
              </TableCell>
              <TableCell className="hidden md:table-cell">{application.appliedDate}</TableCell>
              <TableCell>
                <StatusBadge status={application.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <MessageCircle className="h-4 w-4" />
                    <span className="sr-only">Message</span>
                  </Button>
                  {isEmployer && (
                    <>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <XCircle className="h-4 w-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </>
                  )}
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
    case "Applied":
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30"
        >
          <Clock className="mr-1 h-3 w-3" /> Applied
        </Badge>
      )
    case "Interview":
      return (
        <Badge
          variant="outline"
          className="bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-900/30"
        >
          <Clock className="mr-1 h-3 w-3" /> Interview
        </Badge>
      )
    case "Offer":
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30"
        >
          <CheckCircle className="mr-1 h-3 w-3" /> Offer
        </Badge>
      )
    case "Rejected":
      return (
        <Badge
          variant="outline"
          className="bg-red-50 text-red-600 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30"
        >
          <XCircle className="mr-1 h-3 w-3" /> Rejected
        </Badge>
      )
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

