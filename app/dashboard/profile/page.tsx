import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  PlusCircle,
  X,
  Edit2,
  FileText,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  User,
  MapPin,
  Mail,
  Phone,
  Trash2,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences.</p>
        </div>
        <div className="space-x-2">
          <Button variant="ghost">Preview Profile</Button>
          <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-muted/50">
            <CardHeader className="pb-2 text-center">
              <div className="relative w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-primary to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="mt-2">Sarah Johnson</CardTitle>
              <CardDescription>Senior Software Engineer</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-2">
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  React
                </Badge>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                  Next.js
                </Badge>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA (Remote)</span>
              </div>
            </CardContent>
            <CardFooter className="border-t border-muted/50 flex flex-col items-start p-4 gap-3">
              <div className="flex items-center gap-3 w-full">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">sarah.johnson@example.com</span>
              </div>
              <div className="flex items-center gap-3 w-full">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Profile Completion</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall</span>
                    <span className="text-sm">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-muted" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <User className="h-4 w-4" /> Personal Info
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-sm text-xs bg-green-500/10 text-green-500 border-green-500/20"
                    >
                      Complete
                    </Badge>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4" /> Resume
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-sm text-xs bg-green-500/10 text-green-500 border-green-500/20"
                    >
                      Complete
                    </Badge>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" /> Experience
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-sm text-xs bg-orange-500/10 text-orange-500 border-orange-500/20"
                    >
                      80%
                    </Badge>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="h-4 w-4" /> Education
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-sm text-xs bg-green-500/10 text-green-500 border-green-500/20"
                    >
                      Complete
                    </Badge>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4" /> Skills
                    </span>
                    <Badge
                      variant="outline"
                      className="rounded-sm text-xs bg-orange-500/10 text-orange-500 border-orange-500/20"
                    >
                      75%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="m-0 space-y-4">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                  <CardDescription>Update your personal details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" defaultValue="Sarah" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" defaultValue="Johnson" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Senior Software Engineer"
                      defaultValue="Senior Software Engineer"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Email" defaultValue="sarah.johnson@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Phone Number" defaultValue="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, State" defaultValue="San Francisco, CA" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about">About</Label>
                    <Textarea
                      id="about"
                      placeholder="Write a short bio about yourself"
                      defaultValue="Senior Software Engineer with 5+ years of experience building high-performance web applications. Specialized in React, TypeScript, and Next.js development."
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t border-muted/50 p-4">
                  <Button variant="ghost">Cancel</Button>
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="resume" className="m-0 space-y-4">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Resume</CardTitle>
                  <CardDescription>Upload and manage your resume.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 rounded-lg border border-dashed border-muted/80 p-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Sarah_Johnson_Resume.pdf</p>
                      <p className="text-sm text-muted-foreground">Uploaded 2 months ago · 980 KB</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm font-medium">Replace Resume</div>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="resume-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-muted/50 border-dashed rounded-lg cursor-pointer bg-muted/10 hover:bg-muted/20 transition-all duration-200"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <PlusCircle className="w-8 h-8 mb-3 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOCX, or TXT (MAX. 5MB)</p>
                        </div>
                        <input id="resume-upload" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t border-muted/50 p-4">
                  <Button variant="ghost">Cancel</Button>
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="m-0 space-y-4">
              <Card className="border-muted/50">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Work Experience</CardTitle>
                    <CardDescription>Add your work history to showcase your experience.</CardDescription>
                  </div>
                  <Button size="sm" className="gap-1">
                    <PlusCircle className="h-4 w-4" /> Add Experience
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border border-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Senior Frontend Developer</h3>
                        <p className="text-sm text-primary">TechCorp Inc.</p>
                        <p className="text-sm text-muted-foreground">Jan 2021 - Present · 2 years, 8 months</p>
                        <p className="text-sm text-muted-foreground">San Francisco, CA (Remote)</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm">
                        Led the frontend development team in building and maintaining high-traffic web applications
                        using React, TypeScript, and Next.js. Improved application performance by 40% through code
                        optimizations and implementing lazy loading strategies.
                      </p>
                    </div>
                  </div>

                  <div className="border border-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Frontend Developer</h3>
                        <p className="text-sm text-primary">WebSolutions LLC</p>
                        <p className="text-sm text-muted-foreground">Jun 2018 - Dec 2020 · 2 years, 6 months</p>
                        <p className="text-sm text-muted-foreground">New York, NY</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm">
                        Developed responsive web applications for various clients using React, JavaScript, and CSS
                        frameworks. Collaborated with design and backend teams to implement new features and improve
                        user experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="m-0 space-y-4">
              <Card className="border-muted/50">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Education</CardTitle>
                    <CardDescription>Add your educational background.</CardDescription>
                  </div>
                  <Button size="sm" className="gap-1">
                    <PlusCircle className="h-4 w-4" /> Add Education
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border border-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                        <p className="text-sm text-primary">Stanford University</p>
                        <p className="text-sm text-muted-foreground">2014 - 2018</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm">
                        GPA: 3.8/4.0. Specialization in Software Engineering. Graduated with Honors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="m-0 space-y-4">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Skills</CardTitle>
                  <CardDescription>Add skills to help employers find you.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "JavaScript",
                        "Next.js",
                        "HTML",
                        "CSS",
                        "Tailwind CSS",
                        "Node.js",
                        "Git",
                        "UI/UX Design",
                        "Redux",
                        "RESTful APIs",
                        "GraphQL",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="rounded-full py-1.5 px-3 bg-primary/5 text-primary border-primary/20"
                        >
                          {skill}
                          <X className="h-3.5 w-3.5 ml-1 cursor-pointer" />
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Input placeholder="Add a skill" className="rounded-full flex-1" />
                      <Button className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="m-0 space-y-4">
              <Card className="border-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Job Preferences</CardTitle>
                  <CardDescription>Set your job search preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-title">Desired Job Title</Label>
                      <Input id="job-title" defaultValue="Senior Frontend Developer" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="job-type">Job Type</Label>
                      <Select defaultValue="fullTime">
                        <SelectTrigger id="job-type">
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fullTime">Full-time</SelectItem>
                          <SelectItem value="partTime">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Preferred Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="salary">Expected Salary Range (USD)</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="salary-min" placeholder="Minimum" defaultValue="120000" />
                        <Input id="salary-max" placeholder="Maximum" defaultValue="150000" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="remote">Open to Remote Work</Label>
                        <p className="text-sm text-muted-foreground">Show jobs that are available remotely</p>
                      </div>
                      <Switch id="remote" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="relocation">Open to Relocation</Label>
                        <p className="text-sm text-muted-foreground">Show jobs that require relocation</p>
                      </div>
                      <Switch id="relocation" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="privacy">Profile Privacy</Label>
                        <p className="text-sm text-muted-foreground">Make your profile visible to recruiters</p>
                      </div>
                      <Switch id="privacy" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t border-muted/50 p-4">
                  <Button variant="ghost">Cancel</Button>
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

