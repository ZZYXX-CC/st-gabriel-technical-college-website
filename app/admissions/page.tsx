import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileCheck2,
  FileText,
  Info,
  Layers,
  Rocket,
  School,
  Timer,
} from "lucide-react"
import { ApplicationForm } from "@/components/application-form"

const timeline = [
  { title: "Application", status: "Open now", icon: FileText, active: true },
  { title: "Entrance Exam", status: "Coming soon", icon: ClipboardCheck },
  { title: "Interview", status: "To be scheduled", icon: School },
  { title: "Enrollment", status: "Final step", icon: CheckCircle2 },
]

const tracks = [
  {
    title: "Engineering & Robotics",
    duration: "3 Years Program",
    description: "Master mechanical design, PLC programming, and industrial automation systems.",
  },
  {
    title: "Information Technology",
    duration: "3 Years Program",
    description: "Build skills in software architecture, cybersecurity, and cloud infrastructure.",
  },
  {
    title: "Renewable Energy",
    duration: "2 Years Program",
    description: "Train in solar technology, sustainable systems, and smart-grid operations.",
  },
]

const requirements = [
  {
    title: "SSCE / WAEC Result",
    detail: "Certified copy with at least 5 credits including Mathematics and English.",
    done: true,
  },
  {
    title: "Birth Certificate",
    detail: "Government-issued document or affidavit.",
  },
  {
    title: "Passport Photographs",
    detail: "4 recent white-background photographs.",
  },
  {
    title: "Medical Fitness Report",
    detail: "From a recognized government hospital.",
  },
]

export default function AdmissionsPage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(74,148,196,0.12)_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-stg-sky-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-16 h-64 w-64 rounded-full bg-stg-yellow/20 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-6 md:pt-28">
        <Badge className="mb-4 border-stg-sky-blue/30 bg-stg-sky-blue/10 text-stg-sky-blue hover:bg-stg-sky-blue/20">
          Admissions 2026 / 2027
        </Badge>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Shape the future with <span className="text-stg-yellow">hands-on technical training</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
          Join St. Gabriel Technical College and start your pathway into engineering, IT, and modern vocational careers.
          Our admission process is clear, guided, and student-friendly.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-stg-yellow text-stg-gray hover:bg-stg-yellow/90">
                Start Application <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>St. Gabriel Application Form</DialogTitle>
              </DialogHeader>
              <ApplicationForm />
            </DialogContent>
          </Dialog>

          <Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
            <Link href="#requirements">Check Requirements</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item.title} className="flex items-start gap-3">
              <div
                className={`mt-1 rounded-full p-2 ${item.active ? "bg-stg-sky-blue text-white" : "bg-slate-800 text-slate-400"}`}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold">{index + 1}. {item.title}</p>
                <p className={`text-xs ${item.active ? "text-stg-sky-blue" : "text-slate-400"}`}>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Layers className="h-5 w-5 text-stg-sky-blue" /> Choose Your Track
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {tracks.map((track) => (
                  <Card key={track.title} className="border-white/10 bg-white/5 text-slate-100">
                    <CardHeader>
                      <CardTitle className="text-lg">{track.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-300">{track.description}</p>
                      <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-stg-yellow">
                        <Timer className="h-3.5 w-3.5" /> {track.duration}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#4a94c4] to-[#626161] text-white hover:opacity-95">
                    Start Application <Rocket className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Admissions Application</DialogTitle>
                  </DialogHeader>
                  <ApplicationForm />
                </DialogContent>
              </Dialog>

              <Button asChild variant="link" className="p-0 text-slate-200">
                <Link href="/brochure.pdf" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
                  <Download className="h-4 w-4" /> Download Brochure (PDF)
                </Link>
              </Button>
            </div>
          </div>

          <aside id="requirements" className="space-y-4 lg:col-span-4">
            <Card className="border-stg-sky-blue/30 bg-white/5 text-slate-100">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>Admission Requirements</CardTitle>
                  <Badge className="bg-stg-sky-blue/15 text-stg-sky-blue">Mandatory</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-4">
                  {requirements.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span
                        className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border ${
                          item.done ? "border-stg-sky-blue" : "border-slate-600"
                        }`}
                        aria-hidden="true"
                      >
                        {item.done ? <CheckCircle2 className="h-3.5 w-3.5 text-stg-sky-blue" /> : null}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg border border-stg-sky-blue/20 bg-stg-sky-blue/10 p-3 text-xs text-slate-200">
                  <p className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-stg-sky-blue" />
                    Need help with your documents? Contact admissions@stgabrieltech.com for support before submitting.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-gradient-to-br from-stg-sky-blue/15 to-transparent text-slate-100">
              <CardContent className="space-y-3 p-6">
                <p className="text-xs uppercase tracking-wide text-slate-400">Current Capacity</p>
                <p className="text-sm">Application slots filled</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800" role="img" aria-label="65 percent slots filled">
                  <div className="h-full w-[65%] rounded-full bg-stg-sky-blue" />
                </div>
                <p className="text-xs text-slate-400">Applications are reviewed on a first-come, first-served basis.</p>
              </CardContent>
            </Card>

            <Button asChild className="w-full bg-stg-yellow text-stg-gray hover:bg-stg-yellow/90">
              <Link href="/contact">Talk to Admissions Team</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-slate-900/40 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h3 className="text-xl font-bold">Ready to begin?</h3>
            <p className="text-sm text-slate-300">Submit your application today and secure your place at St. Gabriel.</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90">
                Apply Now <FileCheck2 className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>Application Form</DialogTitle>
              </DialogHeader>
              <ApplicationForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  )
}
