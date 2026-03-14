"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"
import { useMemo, useState } from "react"

const quickStats = [
  { title: "Program Tracks", value: "Multiple technical pathways" },
  { title: "Learning Model", value: "Lab-first and project-based" },
  { title: "Industry Focus", value: "Built for modern workforce needs" },
]

const filters = ["All Categories", "Engineering", "Digital Arts", "Energy", "IT & Systems"]

const programs = [
  {
    category: "Engineering",
    title: "Industrial Automation & Mechatronics",
    description:
      "Master the integration of mechanical systems, electronics, and smart control logic in modern manufacturing environments.",
    tagOne: "HIGH CAREER OUTLOOK",
    tagTwo: "2 YEARS",
    image: "/asset/auto.jpeg",
  },
  {
    category: "IT & Systems",
    title: "Cybersecurity & Network Defense",
    description:
      "Secure digital infrastructures through hands-on penetration testing, network hardening, and security architecture.",
    tagOne: "PROJECT-BASED",
    tagTwo: "1.5 YEARS",
    image: "/asset/cyber.png",
  },
  {
    category: "Digital Arts",
    title: "Visual Comm. & UI/UX Design",
    description:
      "Bridge aesthetics and usability to create practical digital products using modern design tools and workflows.",
    tagOne: "PORTFOLIO-DRIVEN",
    image: "/asset/web-design-SGT.jpg",
  },
  {
    category: "Energy",
    title: "Renewable Energy Systems",
    description:
      "Build practical expertise in solar, wind, and sustainable power systems for modern infrastructure.",
    tagOne: "FUTURE-FOCUSED",
    image: "/asset/energy.png",
  },
  {
    category: "Engineering",
    title: "Electrical Installation & Maintenance",
    description:
      "Learn safe installation, maintenance, and diagnostics of residential and commercial electrical systems.",
    tagOne: "SAFETY-LED",
    tagTwo: "1 YEAR",
    image: "/asset/electricals.png",
  },
  {
    category: "IT & Systems",
    title: "Data Analytics Fundamentals",
    description:
      "Develop core analytics, dashboarding, and reporting skills for data-driven decision support.",
    tagOne: "ANALYTICS CORE",
    image: "/asset/data-analytics.png",
  },
]

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState("All Categories")
  const [query, setQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(4)

  const filteredPrograms = useMemo(() => {
    const q = query.trim().toLowerCase()
    return programs.filter((p) => {
      const filterMatch = activeFilter === "All Categories" || p.category === activeFilter
      const searchMatch =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      return filterMatch && searchMatch
    })
  }, [activeFilter, query])

  const visiblePrograms = filteredPrograms.slice(0, visibleCount)
  const canLoadMore = visibleCount < filteredPrograms.length

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 pb-16 pt-28 sm:px-6 md:pt-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 xl:flex-row">
        <aside className="order-2 h-fit space-y-6 xl:order-1 xl:sticky xl:top-32 xl:w-72">
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-6">
            <h2 className="mb-4 text-lg font-bold text-[#1f2937]">At a Glance</h2>
            <div className="space-y-3">
              {quickStats.map((stat) => (
                <div key={stat.title} className="rounded-xl border border-transparent p-3 hover:border-[#4a94c4]/20 hover:bg-[#4a94c4]/5">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#626161]">{stat.title}</p>
                  <p className="mt-1 text-sm text-[#1f2937]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#ffd400]/60 bg-[#fff8d6] p-6">
            <p className="text-sm font-bold text-[#626161]">Need guidance?</p>
            <p className="mt-2 text-xs text-[#626161]">
              Schedule a virtual campus tour or chat with our admissions team today.
            </p>
            <Link href="/contact" className="mt-4 block rounded-xl bg-white px-4 py-2 text-center text-sm font-semibold text-[#4a94c4]">
              Book a Consultation
            </Link>
          </div>
        </aside>

        <section className="order-1 flex-1 space-y-8 xl:order-2">
          <header>
            <h1 className="text-4xl font-black tracking-tight text-[#1f2937] md:text-5xl">Our Programs</h1>
            <p className="mt-2 max-w-2xl text-lg text-[#626161]">
              Explore specialized vocational pathways designed to bridge the gap between education and high-demand
              technical careers.
            </p>
          </header>

          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex w-full items-center gap-2 rounded-xl border border-[#e5e7eb] px-4 py-3">
                <Search className="h-4 w-4 text-[#626161]" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9ca3af]"
                  placeholder="Search programs (e.g. Mechatronics, Cybersecurity...)"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setVisibleCount(4)
                  }}
                />
              </div>

              <div className="-mx-1 overflow-x-auto px-1">
                <div className="flex min-w-max gap-2 pb-1">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(filter)
                        setVisibleCount(4)
                      }}
                      className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
                        activeFilter === filter
                          ? "bg-[#4a94c4] text-white"
                          : "bg-[#f3f4f6] text-[#626161] hover:bg-[#e5e7eb]"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {visiblePrograms.map((program) => (
              <article key={program.title} className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-52">
                  <Image src={program.image} alt={program.title} fill className="object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#4a94c4] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {program.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#1f2937]">{program.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-[#4a94c4]" />
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-[#626161]">{program.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-[#f3f4f6] px-3 py-1 text-[11px] font-semibold text-[#626161]">{program.tagOne}</span>
                    {program.tagTwo ? (
                      <span className="rounded-lg bg-[#f3f4f6] px-3 py-1 text-[11px] font-semibold text-[#626161]">{program.tagTwo}</span>
                    ) : null}
                  </div>
                  <div className="flex gap-3">
                    <Link href="/admissions" className="flex-1 rounded-lg bg-[#4a94c4] py-2 text-center text-sm font-bold text-white">
                      Apply Now
                    </Link>
                    <Link href="/contact" className="rounded-lg border border-[#d1d5db] px-4 py-2 text-sm font-bold text-[#626161]">
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="py-6 text-center">
            <button
              disabled={!canLoadMore}
              onClick={() => setVisibleCount((v) => v + 4)}
              className={`rounded-xl border px-8 py-3 text-sm font-bold ${
                canLoadMore
                  ? "border-[#d1d5db] bg-white text-[#626161] hover:bg-[#f9fafb]"
                  : "cursor-not-allowed border-[#e5e7eb] bg-[#f3f4f6] text-[#9ca3af]"
              }`}
            >
              {canLoadMore ? "Load More Programs" : "No More Programs"}
            </button>
            <p className="mt-2 text-xs italic text-[#626161]">
              Showing {visiblePrograms.length} of {filteredPrograms.length} programs
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
