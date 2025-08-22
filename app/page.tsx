"use client"
import Link from "next/link";
import Image from "next/image";
import { Monitor, Clock, Globe, Calendar, ArrowRight, ShoppingBag, ShieldCheck, Briefcase, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/ui/call-to-action";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import { About3Demo } from "@/components/blocks/about-3-demo";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import Globe3D from "@/components/blocks/hero";
import { AnimatedCard, CardBody as AnimatedCardBody, CardTitle as AnimatedCardTitle, CardDescription as AnimatedCardDescription, CardVisual } from "@/components/ui/interactive-bento-grid";
import { AnalyticsVisual, WaveVisual, GeometricVisual, NetworkVisual } from "@/components/ui/interactive-bento-grid";
import LottieVisual from "@/components/ui/lottie-visual";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero and Programs Section with Unified Background */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/asset/web-design-SGT.jpg)'
          }}
        ></div>
        
        {/* Subtle White Overlay */}
        <div className="absolute inset-0 bg-white/65 z-[5]"></div>
        
        {/* Hero Section */}
        <Globe3D />

        {/* Programs Section (Bouncy Cards Features) */}
        <div className="relative z-10">
          <BouncyCardsFeatures />
        </div>
      </div>

      {/* About Section */}
      <About3Demo />

      {/* Call to Action Section */}
      <CTA />

      {/* Earn While You Study Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gray-200 text-stg-sky-blue border-gray-300">Opportunity</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-stg-sky-blue">Earn While You Study</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-stg-gray max-w-3xl mx-auto">
              At St. Gabriel Technical College, students don’t just learn — they earn. List your products or services on our school-backed online store, connect with real customers, and start making money while building your portfolio and professional reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 place-items-center">
            {[
              { icon: ShoppingBag, title: "School-backed visibility", desc: "Reach customers who trust our platform", visual: (
                <LottieVisual
                  src="https://lottie.host/1e716099-5349-475e-9c06-a84cf538354e/I3gknEluWE.lottie"
                  width={380}
                  height={200}
                  autoplay
                  loop
                  showGrid
                  gridColor="rgba(147,183,190,0.18)"
                  showBlur
                  blurColor="rgba(139,92,246,0.25)"
                />
              ) },
              { icon: ShieldCheck, title: "Fair, transparent fees", desc: "Student-first policies—keep more of what you earn", visual: (
                <LottieVisual src="https://lottie.host/9c05b91c-4fac-4a8e-84c5-ca7fe0bb95f5/6mGM11WA8f.lottie" width={380} height={200} autoplay loop />
              ) },
              { icon: Briefcase, title: "Real clients & projects", desc: "Gain practical experience while you study", visual: (
                <LottieVisual
                  src="https://lottie.host/f7794f73-b8e5-422d-b93a-9780bfe2102c/RrGKhgBzN1.lottie"
                  width={380}
                  height={200}
                  autoplay
                  loop
                />
              ) },
              { icon: Sparkles, title: "Build your brand", desc: "Grow your portfolio and reputation", visual: (
                <LottieVisual
                  src="https://lottie.host/54cde0d3-e112-4946-a59d-8dfd0798e0a7/xk5fgxfJrx.lottie"
                  width={380}
                  height={200}
                  autoplay
                  loop
                  showGrid
                  gridColor="rgba(147,183,190,0.18)"
                />
              ) },
            ].map(({ icon: Icon, title, desc, visual }) => (
              <AnimatedCard key={title} className="w-full">
                <CardVisual>
                  {visual}
                </CardVisual>
                <AnimatedCardBody>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 rounded-xl p-3 bg-white/70 border border-white/50 shadow-inner">
                      <Icon className="h-6 w-6 text-stg-sky-blue" />
                    </div>
                    <div>
                      <AnimatedCardTitle className="text-stg-sky-blue">{title}</AnimatedCardTitle>
                      <AnimatedCardDescription className="text-stg-gray mt-2">{desc}</AnimatedCardDescription>
                    </div>
                  </div>
                </AnimatedCardBody>
              </AnimatedCard>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-stg-sky-blue hover:bg-stg-sky-blue/90 text-white">
              <a href="https://store.stgabrieltech.com" target="_blank" rel="noopener noreferrer">Visit the Store</a>
            </Button>
            <Button asChild variant="outline" className="border-gray-300 text-stg-sky-blue hover:bg-gray-100">
              <a href="https://store.stgabrieltech.com" target="_blank" rel="noopener noreferrer">Start Selling</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Learning Section (Replaced with Feature108) */}
      <Feature108
        badge="Online Learning"
        heading="Learn Online with Our LMS"
        description="Access our comprehensive Learning Management System for flexible online courses, short programs, and specialized training. Perfect for working professionals and remote learners."
        tabs={[
          {
            value: "tab-1",
            icon: <Monitor className="h-auto w-4 shrink-0" />,
            label: "Online Courses",
            content: {
              badge: "Modern Delivery",
              title: "Full Technical Courses",
              description: "Access full technical courses from anywhere with our interactive online platform.",
              buttonText: "Access Courses",
              buttonLink: "https://st-gabriels-technical-schools-lms.vercel.app/",
              imageSrc: "/asset/study-online.png",
              imageAlt: "Online Courses",
            },
          },
          {
            value: "tab-2",
            icon: <Clock className="h-auto w-4 shrink-0" />,
            label: "Short Programs",
            content: {
              badge: "Quick Learning",
              title: "Short Programs",
              description: "Quick skill-building courses designed for busy professionals and career changers.",
              buttonText: "See Programs",
              imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
              imageAlt: "Short Programs",
            },
          },
          {
            value: "tab-3",
            icon: <Globe className="h-auto w-4 shrink-0" />,
            label: "Flexible Learning",
            content: {
              badge: "Anytime Access",
              title: "Flexible Learning",
              description: "Study at your own pace with 24/7 access to course materials and resources.",
              buttonText: "Start Learning",
              imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
              imageAlt: "Flexible Learning",
            },
          },
        ]}
      />

      {/* News & Events Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Premium gradient background using website colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-stg-sky-blue/5 to-stg-gray/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,148,196,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(98,97,97,0.08),transparent_50%)]" />
        
        {/* Animated background elements - Fixed positioning for responsiveness */}
        <div className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-stg-sky-blue/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-stg-yellow/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-stg-sky-blue/10 text-stg-sky-blue border-stg-sky-blue/20 hover:bg-stg-sky-blue/20 transition-all duration-300">
              Stay Updated
            </Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-stg-yellow to-stg-sky-blue bg-clip-text text-transparent">
                Latest News & Events
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-stg-gray max-w-3xl mx-auto leading-relaxed">
              Stay connected with the latest happenings, achievements, and upcoming events at St. Gabriel Technical Institute
            </p>
          </div>
          
          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Annual Career Fair Success"
                    width={600}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500/90 text-white border-0">
                      Success Story
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-stg-sky-blue" />
                    <time dateTime="2024-05-15" className="text-sm text-stg-gray font-medium">May 15, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-stg-sky-blue transition-colors duration-300">
                    Annual Career Fair Success
                  </h3>
                  <p className="text-stg-gray mb-6 leading-relaxed">
                    Our annual career fair connected students with over 50 leading companies, resulting in numerous internship and job offers.
                  </p>
                  <Button variant="ghost" className="text-stg-sky-blue hover:text-stg-sky-blue/80 hover:bg-stg-sky-blue/10 p-0 h-auto font-semibold group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Robotics Club Competition"
                    width={600}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500/90 text-white border-0">
                      Competition
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-stg-sky-blue" />
                    <time dateTime="2024-06-01" className="text-sm text-stg-gray font-medium">June 1, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-stg-sky-blue transition-colors duration-300">
                    Robotics Club Competition
                  </h3>
                  <p className="text-stg-gray mb-6 leading-relaxed">
                    The St. Gabriel Robotics Club secured first place in the regional inter-school competition.
                  </p>
                  <Button variant="ghost" className="text-stg-sky-blue hover:text-stg-sky-blue/80 hover:bg-stg-sky-blue/10 p-0 h-auto font-semibold group">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="New HVAC Systems Lab Opens"
                    width={600}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500/90 text-white border-0">
                      New Facility
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-stg-sky-blue" />
                    <time dateTime="2024-04-20" className="text-sm text-stg-gray font-medium">April 20, 2024</time>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-stg-sky-blue transition-colors duration-300">
                    New HVAC Systems Lab Opens
                  </h3>
                  <p className="text-stg-gray mb-6 leading-relaxed">
                    Our state-of-the-art HVAC Systems Technology lab is now open, offering advanced training facilities.
                  </p>
                  <Button variant="ghost" className="text-stg-sky-blue hover:text-stg-sky-blue/80 hover:bg-stg-sky-blue/10 p-0 h-auto font-semibold group">
                    Discover More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-stg-sky-blue hover:bg-stg-sky-blue/90 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href="/news-events" className="flex items-center gap-3">
                View All Updates
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
