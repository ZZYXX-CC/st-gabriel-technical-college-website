import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"

const quickStats = [
  { title: "Accreditation", value: "ISO 9001:2015 Technical Excellence Certified" },
  { title: "Employment Rate", value: "94% Alumni Placed Within 6 Months" },
  { title: "Partnerships", value: "120+ Industry Leaders & Global Tech Firms" },
]

const filters = ["All Categories", "Engineering", "Digital Arts", "Energy", "IT"]

const programs = [
  {
    category: "Engineering",
    title: "Industrial Automation & Mechatronics",
    description:
      "Master the integration of mechanical systems, electronics, and smart control logic in modern manufacturing 4.0 environments.",
    tagOne: "HIGH CAREER OUTLOOK",
    tagTwo: "2 YEARS",
    image: "/asset/auto.jpeg",
  },
  {
    category: "IT & Systems",
    title: "Cybersecurity & Network Defense",
    description:
      "Secure digital infrastructures against advanced threats through hands-on penetration testing and security architecture.",
    tagOne: "98% JOB PLACEMENT",
    tagTwo: "1.5 YEARS",
    image: "/asset/cyber.png",
  },
  {
    category: "Digital Arts",
    title: "Visual Comm. & UI/UX Design",
    description:
      "Bridging aesthetics and usability to create immersive digital products using industry-standard design tools and methodologies.",
    tagOne: "CREATIVE PORTFOLIO READY",
    image: "/asset/web-design-SGT.jpg",
  },
  {
    category: "Energy",
    title: "Renewable Energy Systems",
    description:
      "Lead the green revolution with hands-on expertise in solar, wind, and sustainable grid management technologies.",
    tagOne: "FUTURE-PROOF SKILLS",
    image: "/asset/energy.png",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 pb-16 pt-32">
      <div className="mx-auto flex max-w-7xl gap-8">
        <aside className="sticky top-32 hidden h-fit w-72 space-y-6 xl:block">
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
              Schedule a virtual campus tour or chat with our career counselors today.
            </p>
            <Link href="/contact" className="mt-4 block rounded-xl bg-white px-4 py-2 text-center text-sm font-semibold text-[#4a94c4]">
              Book a Consultation
            </Link>
          </div>
        </aside>

        <section className="flex-1 space-y-8">
          <header>
            <h1 className="text-4xl font-black tracking-tight text-[#1f2937] md:text-5xl">Our Programs</h1>
            <p className="mt-2 max-w-2xl text-lg text-[#626161]">
              Explore specialized vocational pathways designed to bridge the gap between education and high-demand
              industrial careers.
            </p>
          </header>

          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-3 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-[#e5e7eb] px-4 py-3">
                <Search className="h-4 w-4 text-[#626161]" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#9ca3af]"
                  placeholder="Search for programs (e.g. Mechatronics, Web Design...)"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {filters.map((filter, i) => (
                  <button
                    key={filter}
                    className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium ${
                      i === 0 ? "bg-[#4a94c4] text-white" : "bg-[#f3f4f6] text-[#626161]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {programs.map((program) => (
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
            <button className="rounded-xl border border-[#d1d5db] bg-white px-8 py-3 text-sm font-bold text-[#626161]">
              Load More Programs
            </button>
            <p className="mt-2 text-xs italic text-[#626161]">Showing 4 of 28 programs</p>
          </div>
        </section>
      </div>
    </div>
  )
}
