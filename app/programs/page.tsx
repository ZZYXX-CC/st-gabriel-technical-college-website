import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedCard, CardBody as AnimatedCardBody, CardTitle as AnimatedCardTitle, CardDescription as AnimatedCardDescription, CardVisual } from "@/components/ui/interactive-bento-grid"
import LottieVisual from "@/components/ui/lottie-visual"
import { AnalyticsVisual, WaveVisual, GeometricVisual, NetworkVisual } from "@/components/ui/interactive-bento-grid"
import Link from "next/link"
import {
  Car,
  Zap,
  Droplet,
  Thermometer,
  Hammer,
  HardHat,
  ShieldCheck,
  Laptop,
  Megaphone,
  BarChart,
  Shirt,
  Utensils,
  Camera,
  Video,
  BrickWallIcon as Brick,
  Paintbrush,
  Tally1Icon as Tally,
  Sun,
  PiggyBank,
  Code,
  Building,
  Lightbulb,
  ShoppingBag,
  Briefcase,
  Sparkles,
} from "lucide-react"

const programsData = [
  {
    category: "Construction and Building Programs",
    icon: Building,
    programs: [
      {
        title: "Masonry and Stonework",
        description: "Master brick laying, stone cutting, and structural masonry techniques for construction projects.",
        image: "/asset/masonry.png",
        icon: Brick,
      },
      {
        title: "Painting and Decoration",
        description:
          "Covers surface preparation, color theory, and decorative techniques for residential and commercial applications.",
        image: "/asset/paint.png",
        icon: Paintbrush,
      },
      {
        title: "Tiling and Floor Installation",
        description:
          "Specialized program teaching ceramic, stone, and specialty tile installation with precision techniques.",
        image: "/asset/tiling.png",
        icon: Tally,
      },
    ],
  },
  {
    category: "Technical and Engineering Programs",
    icon: Hammer,
    programs: [
      {
        title: "AutoCare Technology",
        description:
          "Comprehensive automotive program equipping students with modern vehicle maintenance and repair skills.",
        image: "/asset/auto.jpeg",
        icon: Car,
      },
      {
        title: "Electrical Installation and Maintenance",
        description:
          "Thorough training in electrical systems, wiring, and safety protocols for residential and commercial work.",
        image: "/asset/electricals.png",
        icon: Zap,
      },
      {
        title: "Plumbing and Pipeline Services",
        description: "Covers modern plumbing techniques, pipe installation, and water system maintenance.",
        image: "/asset/plumbing.png",
        icon: Droplet,
      },
      {
        title: "HVAC Systems Technology",
        description:
          "Master heating, ventilation, and air conditioning systems installation and maintenance, including energy-efficient technologies.",
        image: "/asset/hvac.png",
        icon: Thermometer,
      },
      {
        title: "Welding and Fabrication",
        description:
          "Hands-on program teaching various welding techniques and metal fabrication skills with modern equipment.",
        image: "/asset/welding.png",
        icon: Hammer,
      },
      {
        title: "Carpentry and Joinery",
        description:
          "Combines traditional woodworking techniques with modern construction methods for furniture making and construction carpentry.",
        image: "/asset/carpentry.png",
        icon: HardHat,
      },
    ],
  },
  {
    category: "Digital Technology Programs",
    icon: Code,
    programs: [
      {
        title: "Cybersecurity Fundamentals",
        description:
          "Cutting-edge program addressing the growing demand for cybersecurity professionals, covering network security and threat assessment.",
        image: "/asset/cyber.png",
        icon: ShieldCheck,
      },
      {
        title: "Computer System Repairs and Maintenance",
        description:
          "Master hardware troubleshooting, system optimization, and computer maintenance, preparing graduates for technical support.",
        image: "/asset/computrt-repairs.png",
        icon: Laptop,
      },
      {
        title: "Digital Marketing Strategies",
        description:
          "Covers social media marketing, content creation, and online advertising strategies for business growth.",
        image: "/asset/digital-marketing.png",
        icon: Megaphone,
      },
      {
        title: "Data Analytics and Business Intelligence",
        description: "Teaches students to collect, analyze, and interpret data for business decision-making.",
        image: "/asset/data-analytics.png",
        icon: BarChart,
      },
    ],
  },
  {
    category: "Creative and Hospitality Programs",
    icon: Utensils,
    programs: [
      {
        title: "Fashion Design and Tailoring",
        description:
          "Develop skills in garment construction, pattern making, and fashion design, combining traditional and contemporary trends.",
        image: "/asset/fashion-design.png",
        icon: Shirt,
      },
      {
        title: "Catering and Hospitality Management",
        description:
          "Comprehensive program covering food preparation, service excellence, and hospitality business management.",
        image: "/asset/catering.png",
        icon: Utensils,
      },
      {
        title: "Photography and Visual Arts",
        description:
          "Learn traditional and digital photography techniques, including photo editing and visual storytelling.",
        image: "/asset/photography.png",
        icon: Camera,
      },
      {
        title: "Videography and Media Production",
        description: "Teaches video production, editing, and media content creation with professional equipment.",
        image: "/asset/videography.png",
        icon: Video,
      },
    ],
  },
  {
    category: "Emerging Technologies",
    icon: Lightbulb,
    programs: [
      {
        title: "Renewable Energy Systems",
        description:
          "Learn solar panel installation, wind energy systems, and sustainable energy technologies for the growing renewable energy sector.",
        image: "/asset/energy.png",
        icon: Sun,
      },
      {
        title: "Animal Husbandry and Agricultural Technology",
        description:
          "Combines traditional animal care with modern agricultural practices, including livestock management and agricultural business principles.",
        image: "/asset/animal-husbandry.png",
        icon: PiggyBank,
      },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section for Programs */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden bg-stg-gray pt-16 md:pt-20 animate-fade-in">
        <Image
          src="/front-w.jpg"
          alt="St. Gabriel Technical Institute Front"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 px-4 md:px-6 max-w-3xl space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Our Comprehensive Programs
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore our diverse range of technical and vocational training programs designed to equip you with in-demand
            skills.
          </p>
        </div>
      </section>

      {/* Programs List Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          {programsData.map((category, index) => (
            <div key={category.category} className="mb-16 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-stg-gray mb-8 flex items-center gap-3">
                <category.icon className="h-10 w-10 text-stg-sky-blue" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.programs.map((program, pIndex) => (
                  <Card
                    key={program.title}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-stg-gray flex items-center gap-2">
                        <program.icon className="h-6 w-6 text-stg-yellow" />
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90">
                        <Link href="/contact">Inquire Now</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Earn While You Study Section (Interactive Cards) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gray-200 text-stg-sky-blue border-gray-300">Opportunity</Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-stg-sky-blue">Earn While You Study</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl text-stg-gray max-w-3xl mx-auto">
              List your products or services on our school-backed online store, connect with real customers, and start earning while you learn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 place-items-center">
            {[
              { icon: ShoppingBag, title: "School-backed visibility", desc: "Reach customers who trust our platform", visual: (
                <LottieVisual
                  src="https://lottie.host/1e716099-5349-475e-9c06-a84cf538354e/I3gknEluWE.lottie"
                  autoplay
                  loop
                  showGrid
                  gridColor="rgba(147,183,190,0.18)"
                  showBlur
                  blurColor="rgba(139,92,246,0.25)"
                />
              ) },
              { icon: ShieldCheck, title: "Fair, transparent fees", desc: "Student-first policies—keep more of what you earn", visual: (
                <LottieVisual src="https://lottie.host/9c05b91c-4fac-4a8e-84c5-ca7fe0bb95f5/6mGM11WA8f.lottie" autoplay loop />
              ) },
              { icon: Briefcase, title: "Real clients & projects", desc: "Gain practical experience while you study", visual: (
                <LottieVisual
                  src="https://lottie.host/f7794f73-b8e5-422d-b93a-9780bfe2102c/RrGKhgBzN1.lottie"
                  autoplay
                  loop
                />
              ) },
              { icon: Sparkles, title: "Build your brand", desc: "Grow your portfolio and reputation", visual: (
                <LottieVisual
                  src="https://lottie.host/54cde0d3-e112-4946-a59d-8dfd0798e0a7/xk5fgxfJrx.lottie"
                  autoplay
                  loop
                  showGrid
                  gridColor="rgba(147,183,190,0.18)" // light blue grid
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

      {/* Online Learning Section */}
      <section className="py-16 md:py-24 bg-stg-yellow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stg-gray mb-6">
            Can&apos;t Attend On-Campus? Try Our Online Courses
          </h2>
          <p className="text-lg text-stg-gray mb-8 max-w-3xl mx-auto">
            Access many of our technical programs through our comprehensive Learning Management System. Perfect for
            working professionals, remote learners, and those seeking flexible scheduling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stg-gray mb-3">Short Programs</h3>
              <p className="text-gray-700">
                Intensive courses designed for quick skill acquisition and career advancement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stg-gray mb-3">Specialized Courses</h3>
              <p className="text-gray-700">Focused training in specific technical areas and emerging technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-stg-gray mb-3">Flexible Learning</h3>
              <p className="text-gray-700">Study at your own pace with 24/7 access to course materials and support.</p>
            </div>
          </div>
          <Button
            asChild
            className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90 px-10 py-4 text-xl font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <Link
              href="https://st-gabriels-technical-schools-lms.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Online Courses
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
