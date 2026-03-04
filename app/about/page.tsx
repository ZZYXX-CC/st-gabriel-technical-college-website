import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowDown, Lightbulb, ShieldCheck, Hammer, Rocket, Target, Eye } from "lucide-react"

const timeline = [
  {
    year: "1995",
    title: "Founding Vision",
    body: "St. Gabriel started with one workshop and ten students, focused on practical technical training for real jobs.",
  },
  {
    year: "2010",
    title: "Technical Expansion",
    body: "We launched digital labs for computer science and mechatronics, doubling campus capacity.",
  },
  {
    year: "2024",
    title: "Innovation Era",
    body: "Today we combine industry partnerships, modern infrastructure, and future-ready training pathways.",
  },
]

const values = [
  {
    title: "Innovation",
    body: "We continually update tools, methods, and curriculum to stay industry-relevant.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    body: "We hold high ethical standards in teaching, assessment, and leadership.",
    icon: ShieldCheck,
  },
  {
    title: "Hands-on Learning",
    body: "Our programs prioritize practical application so students build confidence by doing.",
    icon: Hammer,
  },
  {
    title: "Future-Ready",
    body: "Students graduate prepared for today’s opportunities and tomorrow’s technology shifts.",
    icon: Rocket,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-[72vh] pt-32 pb-20 md:pt-40 md:pb-24 flex items-center overflow-hidden">
        <Image
          src="/front-w.jpg"
          alt="St. Gabriel campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <Badge className="mb-6 bg-stg-yellow text-stone-900">Established 1995</Badge>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Redefining Excellence in <span className="text-stg-yellow">Vocational Education</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-xl">
            We empower technical leaders with practical skills, strong values, and direct pathways into industry.
          </p>
          <Button className="mt-8 bg-stg-yellow text-stone-900 hover:bg-stg-yellow/90" asChild>
            <a href="#history">Our Story <ArrowDown className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </section>

      <section id="history" className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Our Journey</h2>
            <div className="mt-10 space-y-8 border-l border-stg-sky-blue/30 pl-7">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[34px] top-1 h-3 w-3 rounded-full bg-stg-yellow" />
                  <p className="text-sm font-semibold text-stg-sky-blue">{item.year}</p>
                  <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581091215367-59ab6dcef6c1?q=80&w=1200&auto=format&fit=crop"
              alt="Students training in the lab"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-white/85 p-5 backdrop-blur dark:bg-black/60">
              <p className="italic text-slate-700 dark:text-slate-100">
                "Tradition meets technology. We do not just teach trades; we engineer futures."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <article className="rounded-3xl border border-stg-yellow/20 bg-white p-8 shadow-sm dark:bg-slate-900">
            <Target className="h-10 w-10 text-stg-yellow" />
            <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              To bridge education and industry through accessible, hands-on technical training that builds confidence,
              competence, and career readiness.
            </p>
          </article>
          <article className="rounded-3xl border border-stg-sky-blue/30 bg-white p-8 shadow-sm dark:bg-slate-900">
            <Eye className="h-10 w-10 text-stg-sky-blue" />
            <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">
              To be a leading benchmark for vocational excellence where innovation, integrity, and inclusive growth create
              lasting impact.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">The Values We Live By</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Foundational principles that shape every lecture, lab, and student interaction.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, body, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-stg-yellow/60 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon className="h-8 w-8 text-stg-yellow" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
