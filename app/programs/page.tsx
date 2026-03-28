"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"
import { useMemo, useState } from "react"

const quickStats = [
  { title: "Program Tracks", value: "6 broad career categories" },
  { title: "Training Style", value: "Hands-on, lab-first learning" },
  { title: "Coverage", value: "Full catalog restored from previous version" },
]

const filters = [
  "All Categories",
  "Construction",
  "Engineering",
  "Health & Safety",
  "Digital Technology",
  "Creative & Hospitality",
  "Emerging Technologies",
]

const programs = [
  {
    category: "Construction",
    title: "Masonry and Stonework",
    description:
      "Master brick laying, stone cutting, and structural masonry techniques for construction projects.",
    tagOne: "BUILDING TRADES",
    image: "/asset/masonry.png",
  },
  {
    category: "Construction",
    title: "Painting and Decoration",
    description:
      "Covers surface preparation, color theory, and decorative techniques for residential and commercial applications.",
    tagOne: "FINISHING SKILLS",
    image: "/asset/paint.png",
  },
  {
    category: "Construction",
    title: "Tiling and Floor Installation",
    description:
      "Specialized program teaching ceramic, stone, and specialty tile installation with precision techniques.",
    tagOne: "PRACTICAL TRAINING",
    image: "/asset/tiling.png",
  },
  {
    category: "Engineering",
    title: "AutoCare Technology",
    description:
      "Comprehensive automotive program equipping students with modern vehicle maintenance and repair skills.",
    tagOne: "AUTOMOTIVE",
    tagTwo: "HANDS-ON",
    image: "/asset/auto.jpeg",
  },
  {
    category: "Engineering",
    title: "Electrical Installation and Maintenance",
    description:
      "Thorough training in electrical systems, wiring, and safety protocols for residential and commercial work.",
    tagOne: "SAFETY-LED",
    tagTwo: "CORE TRADE",
    image: "/asset/electricals.png",
  },
  {
    category: "Engineering",
    title: "Plumbing and Pipeline Services",
    description:
      "Covers modern plumbing techniques, pipe installation, and water system maintenance.",
    tagOne: "UTILITY SYSTEMS",
    image: "/asset/plumbing.png",
  },
  {
    category: "Engineering",
    title: "HVAC Systems Technology",
    description:
      "Master heating, ventilation, and air conditioning systems installation and maintenance, including energy-efficient technologies.",
    tagOne: "CLIMATE SYSTEMS",
    image: "/asset/hvac.png",
  },
  {
    category: "Engineering",
    title: "Welding and Fabrication",
    description:
      "Hands-on program teaching various welding techniques and metal fabrication skills with modern equipment.",
    tagOne: "METALWORK",
    image: "/asset/welding.png",
  },
  {
    category: "Engineering",
    title: "Carpentry and Joinery",
    description:
      "Combines traditional woodworking techniques with modern construction methods for furniture making and construction carpentry.",
    tagOne: "WOODWORK",
    image: "/asset/carpentry.png",
  },
  {
    category: "Health & Safety",
    title: "Health and Safety Education (HSE)",
    description:
      "Essential workplace health and safety standards, risk assessment, and compliance training.",
    tagOne: "COMPLIANCE",
    image: "/asset/hero-programs.jpg",
  },
  {
    category: "Digital Technology",
    title: "Cybersecurity Fundamentals",
    description:
      "Cutting-edge program addressing the growing demand for cybersecurity professionals, covering network security and threat assessment.",
    tagOne: "SECURITY",
    image: "/asset/cyber.png",
  },
  {
    category: "Digital Technology",
    title: "Computer System Repairs and Maintenance",
    description:
      "Master hardware troubleshooting, system optimization, and computer maintenance, preparing graduates for technical support roles.",
    tagOne: "IT SUPPORT",
    image: "/asset/computrt-repairs.png",
  },
  {
    category: "Digital Technology",
    title: "Digital Marketing Strategies",
    description:
      "Covers social media marketing, content creation, and online advertising strategies for business growth.",
    tagOne: "MARKETING",
    image: "/asset/digital-marketing.png",
  },
  {
    category: "Digital Technology",
    title: "Data Analytics and Business Intelligence",
    description:
      "Teaches students to collect, analyze, and interpret data for business decision-making.",
    tagOne: "ANALYTICS",
    image: "/asset/data-analytics.png",
  },
  {
    category: "Digital Technology",
    title: "Web Development",
    description:
      "Learn modern web design and development with HTML, CSS, JavaScript, and frameworks.",
    tagOne: "WEB SKILLS",
    image: "/asset/web-design-SGT.jpg",
  },
  {
    category: "Creative & Hospitality",
    title: "Fashion Design and Tailoring",
    description:
      "Develop skills in garment construction, pattern making, and fashion design, combining traditional and contemporary trends.",
    tagOne: "CREATIVE TRADE",
    image: "/asset/fashion-design.png",
  },
  {
    category: "Creative & Hospitality",
    title: "Catering and Hospitality Management",
    description:
      "Comprehensive program covering food preparation, service excellence, and hospitality business management.",
    tagOne: "HOSPITALITY",
    image: "/asset/catering.png",
  },
  {
    category: "Creative & Hospitality",
    title: "Photography and Visual Arts",
    description:
      "Learn traditional and digital photography techniques, including photo editing and visual storytelling.",
    tagOne: "VISUAL ARTS",
    image: "/asset/photography.png",
  },
  {
    category: "Creative & Hospitality",
    title: "Videography and Media Production",
    description:
      "Teaches video production, editing, and media content creation with professional equipment.",
    tagOne: "MEDIA",
    image: "/asset/videography.png",
  },
  {
    category: "Emerging Technologies",
    title: "Renewable Energy Systems",
    description:
      "Learn solar panel installation, wind energy systems, and sustainable energy technologies for the growing renewable energy sector.",
    tagOne: "FUTURE-FOCUSED",
    image: "/asset/energy.png",
  },
  {
    category: "Emerging Technologies",
    title: "Animal Husbandry and Agricultural Technology",
    description:
      "Combines traditional animal care with modern agricultural practices, including livestock management and agricultural business principles.",
    tagOne: "AGRIC-TECH",
    image: "/asset/animal-husbandry.png",
  },
]

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState("All Categories")
  const [query, setQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(6)

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
              Talk to admissions to find the right program for your goals and background.
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
              Explore the full St. Gabriel catalog across technical, creative, digital, and industry-relevant vocational pathways.
            </p>
          </header>

          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex w-full items-center gap-2 rounded-xl border border-[#e5e7eb] px-4 py-3">
                <Search className="h-4 w-4 text-[#626161]" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9ca3af]"
                  placeholder="Search programs (e.g. Welding, Fashion, Cybersecurity...)"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setVisibleCount(6)
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
                        setVisibleCount(6)
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
              onClick={() => setVisibleCount((v) => v + 6)}
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
