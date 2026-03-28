import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, PlayCircle, Shield, Zap, Wrench } from "lucide-react"

const highlights = [
  { label: "Specialized Programs", value: "20+" },
  { label: "Employment Focus", value: "Practical" },
  { label: "Career-Ready Training", value: "Project-Based" },
  { label: "Hands-on Lab", value: "100%" },
]

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Learn the essentials of network security, threat awareness, and practical digital defense for modern workplaces.",
    icon: Shield,
    accent: "#4a94c4",
    panel: "#d6e9f6",
  },
  {
    title: "Renewable Energy Systems",
    description:
      "Build practical skills in solar, power systems, and modern energy infrastructure with hands-on technical training.",
    icon: Zap,
    accent: "#ffd400",
    panel: "#fff5bf",
  },
  {
    title: "Welding & Fabrication",
    description:
      "Train with modern tools and workshop methods to develop durable fabrication and metalwork skills employers need.",
    icon: Wrench,
    accent: "#626161",
    panel: "#ececec",
  },
]

const news = [
  {
    tag: "EVENT",
    date: "MAY 15, 2024",
    title: "Annual Career Fair Success",
    body: "Our annual career fair connected students with over 50 leading companies, resulting in internship and job opportunities.",
    image: "/asset/hero.jpg",
  },
  {
    tag: "FACILITY",
    date: "APRIL 20, 2024",
    title: "New HVAC Systems Lab Opens",
    body: "A modern training lab now supports hands-on technical instruction in HVAC systems and energy-efficient equipment.",
    image: "/asset/hvac.png",
  },
  {
    tag: "COMPETITION",
    date: "JUNE 1, 2024",
    title: "Robotics Club Competition",
    body: "Students represented the school proudly in regional innovation activities and practical technical showcases.",
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
              ADMISSIONS OPEN
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Empowering the Next Generation of <span className="text-[#4a94c4]">Technical Leaders</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg text-[#626161]">
              St. Gabriel Technical College equips students with practical, industry-relevant skills through hands-on
              learning, experienced instructors, and a future-focused technical environment.
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
                alt="Students in a modern technical learning environment"
                width={900}
                height={700}
                className="h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
            <div className="relative mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/70 bg-white/85 p-3 text-xs font-semibold text-[#626161]">
                Industry-Relevant Curriculum
              </div>
              <div className="rounded-xl border border-white/70 bg-white/85 p-3 text-xs font-semibold text-[#626161]">
                Hands-on Labs & Workshops
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#f8fafc] p-8 md:p-10">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4a94c4]">Featured learning paths</p>
              <h2 className="mt-2 text-3xl font-extrabold">Build practical skills that matter</h2>
            </div>
            <Link href="/programs" className="inline-flex items-center gap-2 font-semibold text-[#4a94c4]">
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <article
                  key={course.title}
                  className="rounded-[1.75rem] border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: course.panel }}
                  >
                    <Icon className="h-6 w-6" style={{ color: course.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937]">{course.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#626161]">{course.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4a94c4]">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#e5e7eb] bg-white p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4a94c4]">Why St. Gabriel</p>
              <h2 className="mt-2 text-3xl font-extrabold">A learning experience built for employability</h2>
              <p className="mt-4 max-w-2xl text-[#626161]">
                Our training model combines technical instruction, guided practice, and exposure to real-world tools so
                students graduate with confidence and usable skills.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Hands-on workshops and practical sessions",
                  "Experienced instructors and structured guidance",
                  "Career-focused programs aligned with market needs",
                  "Supportive environment for technical growth",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#f8fafc] p-4 text-sm text-[#374151]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#4a94c4]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] bg-[#f8fbff] p-4">
              <Image
                src="/asset/front-w.jpg"
                alt="St. Gabriel campus view"
                width={900}
                height={700}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold">Latest News</h2>
              <p className="mt-2 text-[#626161]">Updates from the St. Gabriel technical community.</p>
            </div>
            <Link href="/news-events" className="inline-flex items-center gap-1 font-semibold text-[#4a94c4]">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.75rem] border border-[#e5e7eb] bg-white shadow-sm">
                <div className="relative h-52">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#4a94c4]">
                    <span>{item.tag}</span>
                    <span className="text-[#9ca3af]">•</span>
                    <span className="text-[#626161]">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1f2937]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#626161]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
