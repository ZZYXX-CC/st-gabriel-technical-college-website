import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

import { programBySlug, programs } from "@/lib/programs"

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }))
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const program = programBySlug.get(slug)

  if (!program) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 pb-16 pt-28 sm:px-6 md:pt-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a94c4] hover:text-[#3578a8]">
          <ArrowLeft className="h-4 w-4" />
          Back to programs
        </Link>

        <section className="overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px]">
              <Image src={program.image} alt={program.title} fill className="object-cover" priority />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="mb-4 inline-flex w-fit rounded-full bg-[#4a94c4] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                {program.category}
              </span>
              <h1 className="text-3xl font-black tracking-tight text-[#1f2937] sm:text-4xl">{program.title}</h1>
              <p className="mt-4 text-base leading-7 text-[#626161]">{program.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg bg-[#f3f4f6] px-3 py-1 text-[11px] font-semibold text-[#626161]">{program.tagOne}</span>
                {program.tagTwo ? (
                  <span className="rounded-lg bg-[#f3f4f6] px-3 py-1 text-[11px] font-semibold text-[#626161]">{program.tagTwo}</span>
                ) : null}
              </div>

              <div className="mt-8 grid gap-4 rounded-2xl bg-[#f8fafc] p-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#626161]">Duration</p>
                  <p className="mt-1 text-sm text-[#1f2937]">{program.duration}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#626161]">Learning Format</p>
                  <p className="mt-1 text-sm text-[#1f2937]">{program.format}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/admissions" className="rounded-xl bg-[#4a94c4] px-6 py-3 text-center text-sm font-bold text-white">
                  Apply for this Program
                </Link>
                <Link href="/contact" className="rounded-xl border border-[#d1d5db] px-6 py-3 text-center text-sm font-bold text-[#626161]">
                  Talk to Admissions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-[#e5e7eb] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1f2937]">Program Overview</h2>
            <p className="mt-4 text-base leading-7 text-[#626161]">{program.overview}</p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-[#1f2937]">What you’ll learn</h3>
                <ul className="mt-4 space-y-3">
                  {program.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#626161]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4a94c4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1f2937]">Career pathways</h3>
                <ul className="mt-4 space-y-3">
                  {program.careerPaths.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#626161]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4a94c4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-[#ffd400]/60 bg-[#fff8d6] p-6">
              <p className="text-sm font-bold text-[#626161]">Need help deciding?</p>
              <p className="mt-2 text-sm leading-6 text-[#626161]">
                Admissions can help you choose the program that fits your interests, background, and career direction.
              </p>
              <Link href="/contact" className="mt-4 inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#4a94c4]">
                Speak to Admissions
              </Link>
            </div>

            <div className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1f2937]">Why study at St. Gabriel?</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#626161]">
                <li>Hands-on vocational learning environment</li>
                <li>Career-relevant trade and technology tracks</li>
                <li>Practical training designed for employable skills</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}
