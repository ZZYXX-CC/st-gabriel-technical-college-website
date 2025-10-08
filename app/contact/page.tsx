import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for Contact */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden bg-stg-yellow animate-fade-in">
        <Image
          src="/asset/hero-contact.jpg"
          alt="School building exterior"
          fill
          className="object-cover z-0 brightness-50"
          priority
        />
        <div className="relative z-10 px-4 md:px-6 max-w-3xl space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            We&apos;re here to help! Reach out to us for any inquiries.
          </p>
          {/* Waitlist trigger removed; use banner "here" link instead */}
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Form */}
          <Card className="shadow-lg rounded-lg p-6">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-stg-gray mb-4">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-6">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-stg-gray">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-stg-gray">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@example.com" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-stg-gray">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your inquiry" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-stg-gray">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required />
                </div>
                <Button
                  type="submit"
                  className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90 px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid gap-8">
            <Card className="shadow-lg rounded-lg p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-stg-gray mb-4">General Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-stg-sky-blue" />
                  <p className="text-stg-gray">
                    St. Gabriel Technical and Vocational Training Institute, Enugu State, Nigeria
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-stg-sky-blue" />
                  <p className="text-stg-gray">Phone: [Contact Number]</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-stg-sky-blue" />
                  <p className="text-stg-gray">Email: info@stgabrieltech.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-stg-sky-blue" />
                  <p className="text-stg-gray">Office Hours: Mon-Fri: 8 AM - 5 PM, Sat: 9 AM - 2 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-stg-gray mb-4">Specific Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-stg-sky-blue" />
                  <p className="text-stg-gray">Admissions: admissions@stgabrieltech.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-stg-sky-blue" />
                  <p className="text-stg-gray">Industry Partnerships: partnerships@stgabrieltech.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-stg-gray">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Find Us on the Map</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              title="St. Gabriel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5483430769976!2d7.480045174895201!3d6.448112625311071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104371f2b065bf0b%3A0x5d4fa9acd6e8b1a6!2sEnugu!5e0!3m2!1sen!2sng!4v1690910134201!5m2!1sen!2sng"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
