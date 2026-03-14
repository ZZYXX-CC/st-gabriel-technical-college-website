import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowRight, MapPin, Video } from "lucide-react"

const categories = ["All Updates", "Academic", "Industry", "Tech Competitions", "Sports"]

const stories = [
  {
    title: "New Partnership: Tesla to Mentor Gabriel Engineering Fellows",
    excerpt: "A new collaboration will provide direct mentorship from EV engineers for senior-level cohorts.",
    tag: "Industry",
    date: "Oct 12, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gabriel Tech Ranked #1 in State Robotics Excellence",
    excerpt: "For the third year in a row, our robotics track has been recognized for curriculum quality.",
    tag: "Academic",
    date: "Oct 08, 2026",
    image:
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Ethos Hackathon: Call for Proposals",
    excerpt: "Registration is open for the annual 48-hour challenge on ethical AI systems.",
    tag: "Tech Competition",
    date: "Oct 05, 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
]

const events = [
  { day: "22", month: "Oct", title: "Future Tech Open House", mode: "Main Campus Lab Hall", virtual: false },
  { day: "04", month: "Nov", title: "Cybersecurity Workshop", mode: "Virtual Session", virtual: true },
  { day: "15", month: "Nov", title: "Alumni Industry Night", mode: "Grand Ballroom", virtual: false },
  { day: "01", month: "Dec", title: "Semester Tech Showcase", mode: "St. Gabriel Auditorium", virtual: false },
]

export default function NewsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="px-6 pt-32 md:pt-36">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
          <div className="relative h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1800&auto=format&fit=crop"
              alt="Students collaborating in a lab"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-x-6 bottom-7 md:inset-x-10">
              <div className="max-w-2xl rounded-2xl border border-white/20 bg-white/90 p-6 backdrop-blur dark:bg-black/70">
                <Badge className="mb-3 bg-stg-yellow text-stone-900">Featured Story</Badge>
                <h1 className="text-2xl font-extrabold leading-tight md:text-4xl">
                  Innovation Summit 2026: Shaping the Technical Frontier
                </h1>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200 md:text-base">
                  We are hosting over 50 schools and industry leaders for live competitions, demos, and hiring conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-3 border-b border-border pb-6">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                index === 0
                  ? "bg-stg-yellow text-stone-900"
                  : "border border-stg-sky-blue/25 bg-background hover:bg-stg-sky-blue/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((story) => (
                <article
                  key={story.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <Image src={story.image} alt={story.title} width={800} height={460} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between text-xs font-semibold">
                      <span className="rounded-full bg-stg-sky-blue/10 px-2 py-1 text-stg-sky-blue">{story.tag}</span>
                      <span className="text-muted-foreground">{story.date}</span>
                    </div>
                    <h3 className="text-lg font-bold">{story.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{story.excerpt}</p>
                    <Button variant="ghost" className="mt-3 px-0 text-stg-sky-blue hover:bg-transparent">
                      Read story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <div className="mt-6 space-y-4">
              {events.map((event) => (
                <div key={`${event.month}-${event.day}-${event.title}`} className="rounded-xl border border-border bg-background p-4">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-stg-yellow/40 bg-stg-yellow/10 text-stone-900 dark:text-stg-yellow">
                      <span className="text-[10px] font-bold uppercase">{event.month}</span>
                      <span className="text-lg font-extrabold leading-none">{event.day}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold leading-snug">{event.title}</h3>
                      <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                        {event.virtual ? <Video className="h-3 w-3" /> : <MapPin className="h-3 w-3" />} {event.mode}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-6 w-full bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90">
              <CalendarDays className="mr-2 h-4 w-4" /> View Full Calendar
            </Button>
          </aside>
        </div>
      </section>
    </div>
  )
}
