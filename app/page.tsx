import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, PlayCircle, Shield, Zap, Wrench, Video, MessageCircle } from "lucide-react"

const highlights = [
  { label: "Specialized Programs", value: "20+" },
  { label: "Employment Rate", value: "95%" },
  { label: "Career-Ready Training", value: "Project-Based" },
  { label: "Hands-on Lab", value: "100%" },
]

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Master the art of digital defense. Learn network security, threat assessment, and protective measures for modern digital infrastructure from industry experts.",
    icon: Shield,
    accent: "#4a94c4",
    panel: "#d6e9f6",
  },
  {
    title: "Smart Energy Systems",
    description:
      "Lead the green revolution. Comprehensive training in electrical systems, wiring, and safety protocols for modern residential and commercial environments.",
    icon: Zap,
    accent: "#ffd400",
    panel: "#fff5bf",
  },
  {
    title: "Precision Fabrication",
    description:
      "Master the craft of metal fabrication with state-of-the-art tools. From architectural welding to industrial assembly, gain the skills modern industry demands.",
    icon: Wrench,
    accent: "#626161",
    panel: "#ececec",
  },
]

const news = [
  {
    tag: "EVENT",
    date: "MAY 15, 2026",
    title: "Annual Robotics Club Competition Winners Announced",
    body: "Our students showcased incredible innovation at the 2026 robotics showcase, featuring AI-driven automation.",
    image: "/asset/hero.jpg",
  },
  {
    tag: "FACILITY",
    date: "APRIL 20, 2026",
    title: "New HVAC Systems Lab Opens for Smart Energy Training",
    body: "A state-of-the-art facility designed to provide hands-on experience with modern climate control systems.",
    image: "/asset/hvac.png",
  },
  {
    tag: "CAREER",
    date: "MARCH 12, 2026",
    title: "Connecting Students with Global Tech Giants",
    body: "Last month&apos;s career fair saw record-breaking attendance from leading engineering and tech firms.",
    image: "/asset/hero-programs.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="bg-white text-[#1f2937]">
      <section className="px-6 pb-20 pt-32 md:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d6e9f6] px-4 py-2 text-xs font-bold text-[#4a94c4]">
              ADMISSIONS OPEN FOR FALL 2026
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Empowering the Next Generation of <span className="text-[#4a94c4]">Technical Leaders</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-[#626161]">
              Join a future-ready technical community. We provide the tools, expertise, and environment for you to master
              high-demand technical skills in Nigeria and beyond.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="rounded-2xl bg-[#4a94c4] px-7 py-3 text-center font-semibold text-white">
                Apply for Admission
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d1d5db] bg-white px-7 py-3 font-semibold text-[#626161]"
              >
                <PlayCircle className="h-5 w-5" /> Explore Our Mission
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-3xl border border-[#e5e7eb] bg-[#f9fafb] p-5 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-extrabold text-[#4a94c4] md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#626161]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-[#e5e7eb] bg-[#f8fbff] p-4 md:p-6">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#ffd400]/30" />
            <div className="absolute -bottom-16 -left-14 h-44 w-44 rounded-full bg-[#4a94c4]/20" />
            <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-3 shadow-sm">
              <Image
                src="/asset/hero-t.png"
                alt="African students in modern technical learning environment"
                width={900}
                height={700}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
            <div className="relative mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/70 bg-white/85 p-3 text-xs font-semibold text-[#626161]">
                ✓ Industry-Relevant Curriculum
              </div>
              <div className="rounded-xl border border-white/70 bg-white/85 p-3 text-xs font-semibold text-[#626161]">
                ✓ Hands-on Labs & Workshops
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">Our Accredited Courses</h2>
            <p className="mt-2 text-[#626161]">World-class technical training for a global workforce.</p>
          </div>

          <div className="space-y-8">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <article
                  key={course.title}
                  className="grid overflow-hidden rounded-[2rem] border border-[#e5e7eb] md:grid-cols-2"
                >
                  <div className="p-10">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: course.panel }}>
                      <Icon className="h-5 w-5" style={{ color: course.accent }} />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{course.title}</h3>
                    <p className="mb-6 text-[#626161]">{course.description}</p>
                    <button className="rounded-xl px-5 py-2 font-semibold text-white" style={{ backgroundColor: course.accent }}>
                      Learn More
                    </button>
                  </div>
                  <div className="flex items-center justify-center p-10" style={{ backgroundColor: course.panel }}>
                    <div className="w-full max-w-sm rounded-2xl border border-white/70 bg-white/75 p-6 shadow-sm">
                      <div className="mb-3 h-2 w-24 rounded-full bg-white" />
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-[#626161]">
                          <CheckCircle2 className="h-4 w-4" style={{ color: course.accent }} /> Module 1 complete
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm text-[#626161]">
                          <CheckCircle2 className="h-4 w-4" style={{ color: course.accent }} /> Hands-on assessment ready
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5e7eb] bg-[#f8fafc] px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-[#d6e9f6] px-3 py-1 text-xs font-bold text-[#4a94c4]">HYBRID LEARNING</p>
            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              Learn Technical Skills <span className="text-[#4a94c4]">Anywhere, Anytime.</span>
            </h2>
            <p className="mb-6 text-[#626161]">
              Access our state-of-the-art Learning Management System. Stream lectures, complete interactive assessments,
              and track your progress in real-time.
            </p>
            <div className="space-y-4 text-sm text-[#626161]">
              <p className="flex items-center gap-2"><Video className="h-4 w-4 text-[#4a94c4]" /> On-demand lectures</p>
              <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#4a94c4]" /> Expert mentorship</p>
            </div>
            <Link href="https://st-gabriels-technical-schools-lms.vercel.app/" className="mt-8 inline-block rounded-xl bg-[#4a94c4] px-6 py-3 font-semibold text-white">
              Explore LMS Dashboard
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#e5e7eb]">
            <Image src="/asset/study-online.png" alt="Student using laptop for online learning" width={900} height={700} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold">Latest Tech News</h2>
              <p className="mt-2 text-[#626161]">Updates from the St. Gabriel technical community.</p>
            </div>
            <Link href="/news" className="inline-flex items-center gap-1 font-semibold text-[#4a94c4]">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white">
                <div className="relative h-52">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold">{item.tag}</span>
                </div>
                <div className="p-6">
                  <p className="mb-2 text-xs font-bold text-[#626161]">{item.date}</p>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-[#626161]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
