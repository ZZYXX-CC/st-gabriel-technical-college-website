import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Briefcase, HelpCircle, UserRound, Clock4 } from "lucide-react"

const contactCards = [
  {
    title: "Admissions",
    description: "Start your technical journey. Get support on applications and enrollment requirements.",
    email: "admissions@stgabrieltech.com",
    phone: "+234 800 123 4567",
    icon: UserRound,
  },
  {
    title: "General Inquiries",
    description: "Ask about school events, campus life, and available student support services.",
    email: "hello@stgabrieltech.com",
    phone: "+234 800 765 4321",
    icon: HelpCircle,
  },
  {
    title: "Career Services",
    description: "Partner with us for internships, placements, and industry collaboration opportunities.",
    email: "careers@stgabrieltech.com",
    phone: "Industry Relations Office",
    icon: Briefcase,
  },
]

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-[#f8f7f6] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(231,221,207,0.8)_1px,transparent_1px)] [background-size:26px_26px]" />

      <section className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-24 sm:px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-stg-yellow">Contact St. Gabriel</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
              Get in touch with the <span className="text-stg-sky-blue">future</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-base">
              Have questions about admissions, programs, or campus life? Our team is here to guide you every step of the way.
            </p>
          </div>

          <Card className="border-stg-yellow/20 bg-white/85 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" aria-label="Contact form">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                      Full Name
                    </label>
                    <Input id="fullName" name="fullName" autoComplete="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" autoComplete="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what you need support with..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-stg-yellow text-stg-gray hover:bg-stg-yellow/90">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="overflow-hidden border-stg-sky-blue/20 bg-slate-900 text-white shadow-xl">
            <CardContent className="relative p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,148,196,0.25),transparent_70%)]" />
              <div className="relative space-y-4 p-6">
                <h2 className="text-xl font-bold">Visit Our Campus</h2>
                <p className="text-sm text-slate-200">St. Gabriel Technical & Vocational Training Institute, Enugu State, Nigeria</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-stg-yellow" /> 12 Innovation Way, Enugu</p>
                  <p className="flex items-center gap-2"><Clock4 className="h-4 w-4 text-stg-yellow" /> Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((item) => (
              <Card key={item.title} className="border-stg-yellow/20 bg-white/90">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <item.icon className="h-5 w-5 text-stg-sky-blue" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <p>{item.description}</p>
                  <p className="flex items-center gap-2 text-slate-700">
                    <Mail className="h-4 w-4 text-stg-yellow" />
                    <Link href={`mailto:${item.email}`} className="hover:underline">
                      {item.email}
                    </Link>
                  </p>
                  <p className="flex items-center gap-2 text-slate-700">
                    <Phone className="h-4 w-4 text-stg-yellow" /> {item.phone}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-stg-sky-blue/10 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-stg-gray">Find Us on the Map</h2>
          <div className="overflow-hidden rounded-xl border border-stg-sky-blue/20 shadow-lg">
            <iframe
              title="St. Gabriel location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5483430769976!2d7.480045174895201!3d6.448112625311071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104371f2b065bf0b%3A0x5d4fa9acd6e8b1a6!2sEnugu!5e0!3m2!1sen!2sng!4v1690910134201!5m2!1sen!2sng"
              className="h-[360px] w-full border-0 sm:h-[420px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
