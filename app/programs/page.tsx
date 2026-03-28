import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Car, Zap, Droplet, Thermometer, Hammer, HardHat, ShieldCheck, Laptop, Megaphone, BarChart, Shirt, Utensils, Camera, Video, BrickWallIcon as Brick, Paintbrush, Tally1Icon as Tally, Sun, PiggyBank, Code, Building, Lightbulb } from "lucide-react"

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
        description: "Learn surface preparation, colour use, and decorative finishing for practical interior and exterior work.",
        image: "/asset/paint.png",
        icon: Paintbrush,
      },
      {
        title: "Tiling and Floor Installation",
        description: "Build precision skills for ceramic, stone, and specialist floor installation projects.",
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
        description: "Comprehensive automotive training in maintenance, diagnostics, and workshop practice.",
        image: "/asset/auto.jpeg",
        icon: Car,
      },
      {
        title: "Electrical Installation and Maintenance",
        description: "Hands-on training in electrical systems, wiring, installation, and safety procedures.",
        image: "/asset/electricals.png",
        icon: Zap,
      },
      {
        title: "Plumbing and Pipeline Services",
        description: "Develop practical expertise in modern plumbing systems, pipe installation, and water maintenance.",
        image: "/asset/plumbing.png",
        icon: Droplet,
      },
      {
        title: "HVAC Systems Technology",
        description: "Train in installation and maintenance of heating, ventilation, and air conditioning systems.",
        image: "/asset/hvac.png",
        icon: Thermometer,
      },
      {
        title: "Welding and Fabrication",
        description: "Learn core welding techniques and fabrication workflows using modern workshop equipment.",
        image: "/asset/welding.png",
        icon: Hammer,
      },
      {
        title: "Carpentry and Joinery",
        description: "Combine traditional woodworking skill with practical construction methods for real projects.",
        image: "/asset/carpentry.png",
        icon: HardHat,
      },
    ],
  },
  {
    category: "Health and Safety Programs",
    icon: ShieldCheck,
    programs: [
      {
        title: "Health and Safety Education (HSE)",
        description: "Learn essential workplace safety standards, hazard awareness, and compliance basics.",
        image: "/asset/hero-programs.jpg",
        icon: ShieldCheck,
      },
    ],
  },
  {
    category: "Digital Technology Programs",
    icon: Code,
    programs: [
      {
        title: "Cybersecurity Fundamentals",
        description: "Build foundational skills in network security, cyber hygiene, and digital threat awareness.",
        image: "/asset/cyber.png",
        icon: ShieldCheck,
      },
      {
        title: "Computer System Repairs and Maintenance",
        description: "Master troubleshooting, maintenance, and optimization for modern computer systems.",
        image: "/asset/computrt-repairs.png",
        icon: Laptop,
      },
      {
        title: "Digital Marketing Strategies",
        description: "Learn practical content, social media, and online promotion strategies for business growth.",
        image: "/asset/digital-marketing.png",
        icon: Megaphone,
      },
      {
        title: "Data Analytics and Business Intelligence",
        description: "Develop skills in collecting, interpreting, and presenting data for business decision-making.",
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
        description: "Gain practical garment construction and fashion design skills rooted in real production workflows.",
        image: "/asset/fashion-design.png",
        icon: Shirt,
      },
      {
        title: "Catering and Hospitality Management",
        description: "Develop core food service, hospitality, and customer experience skills for the service industry.",
        image: "/asset/catering.png",
        icon: Utensils,
      },
      {
        title: "Photography and Visual Arts",
        description: "Learn image creation, photo editing, and visual storytelling using modern tools and techniques.",
        image: "/asset/photography.png",
        icon: Camera,
      },
      {
        title: "Videography and Media Production",
        description: "Train in shooting, editing, and producing media content with practical project experience.",
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
        description: "Learn solar and other sustainable energy technologies for the growing renewable energy sector.",
        image: "/asset/energy.png",
        icon: Sun,
      },
      {
        title: "Animal Husbandry and Agricultural Technology",
        description: "Combine traditional animal care with modern agricultural practices and business fundamentals.",
        image: "/asset/animal-husbandry.png",
        icon: PiggyBank,
      },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] px-4 pb-16 pt-28 sm:px-6 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <h1 className="text-4xl font-black tracking-tight text-[#1f2937] md:text-5xl">Our Programs</h1>
          <p className="mt-3 max-w-3xl text-lg text-[#626161]">
            Explore our technical and vocational training pathways designed to equip students with practical,
            employable skills across construction, engineering, digital technology, hospitality, and emerging sectors.
          </p>
        </header>

        <section className="mb-12 overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div className="relative h-[280px] md:h-[360px]">
            <Image
              src="/front-w.jpg"
              alt="St. Gabriel Technical College front view"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#1f2937]/45" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-3xl text-white">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ffd400]">Career-focused training</p>
                <h2 className="text-3xl font-extrabold md:text-5xl">Comprehensive programs for real-world technical work</h2>
                <p className="mt-4 text-base text-white/90 md:text-lg">
                  Learn through structured instruction, workshop practice, and applied technical training built for modern industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-12">
          {programsData.map((category) => (
            <section key={category.category} className="rounded-[2rem] border border-[#e5e7eb] bg-white p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-extrabold text-[#1f2937] md:text-3xl">
                <category.icon className="h-8 w-8 text-[#4a94c4]" />
                {category.category}
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {category.programs.map((program) => (
                  <article
                    key={program.title}
                    className="overflow-hidden rounded-[1.5rem] border border-[#e5e7eb] bg-[#fcfcfd] transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative h-52">
                      <Image src={program.image} alt={program.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold text-[#1f2937]">{program.title}</h3>
                        <program.icon className="mt-1 h-5 w-5 shrink-0 text-[#4a94c4]" />
                      </div>
                      <p className="text-sm leading-6 text-[#626161]">{program.description}</p>
                      <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4a94c4]">
                        Inquire Now <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
