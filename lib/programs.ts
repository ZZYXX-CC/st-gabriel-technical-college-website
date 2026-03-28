export type Program = {
  slug: string
  category: string
  title: string
  description: string
  tagOne: string
  tagTwo?: string
  image: string
  duration: string
  format: string
  careerPaths: string[]
  outcomes: string[]
  overview: string
}

export const filters = [
  "All Categories",
  "Construction",
  "Engineering",
  "Health & Safety",
  "Digital Technology",
  "Creative & Hospitality",
  "Emerging Technologies",
]

export const programs: Program[] = [
  {
    slug: "masonry-and-stonework",
    category: "Construction",
    title: "Masonry and Stonework",
    description:
      "Master brick laying, stone cutting, and structural masonry techniques for construction projects.",
    tagOne: "BUILDING TRADES",
    image: "/asset/masonry.png",
    duration: "Certificate track",
    format: "Workshop + site practice",
    careerPaths: ["Mason", "Site technician", "Construction artisan"],
    outcomes: ["Brick/block laying", "Stone finishing", "Structural alignment basics"],
    overview:
      "This program builds strong practical foundations in walling systems, structural layouts, finishing standards, and safe job-site execution.",
  },
  {
    slug: "painting-and-decoration",
    category: "Construction",
    title: "Painting and Decoration",
    description:
      "Covers surface preparation, color theory, and decorative techniques for residential and commercial applications.",
    tagOne: "FINISHING SKILLS",
    image: "/asset/paint.png",
    duration: "Certificate track",
    format: "Studio + practical finishing labs",
    careerPaths: ["Painter", "Interior finishing specialist", "Decor consultant"],
    outcomes: ["Surface prep", "Paint systems", "Decorative finishing techniques"],
    overview:
      "Students learn how to prepare surfaces correctly, choose coatings, and deliver clean decorative finishes suitable for modern residential and commercial spaces.",
  },
  {
    slug: "tiling-and-floor-installation",
    category: "Construction",
    title: "Tiling and Floor Installation",
    description:
      "Specialized program teaching ceramic, stone, and specialty tile installation with precision techniques.",
    tagOne: "PRACTICAL TRAINING",
    image: "/asset/tiling.png",
    duration: "Certificate track",
    format: "Hands-on workshop",
    careerPaths: ["Tiler", "Floor installer", "Finishing contractor"],
    outcomes: ["Tile layout", "Adhesive and grout use", "Precision cutting and finishing"],
    overview:
      "This track focuses on accuracy, layout planning, substrate preparation, and polished finishing for interior and exterior flooring and wall systems.",
  },
  {
    slug: "autocare-technology",
    category: "Engineering",
    title: "AutoCare Technology",
    description:
      "Comprehensive automotive program equipping students with modern vehicle maintenance and repair skills.",
    tagOne: "AUTOMOTIVE",
    tagTwo: "HANDS-ON",
    image: "/asset/auto.jpeg",
    duration: "Certificate track",
    format: "Workshop + diagnostics practice",
    careerPaths: ["Auto technician", "Service advisor", "Garage specialist"],
    outcomes: ["Routine servicing", "Basic diagnostics", "Vehicle systems maintenance"],
    overview:
      "Learners gain practical exposure to vehicle systems, periodic servicing routines, workshop safety, and core maintenance workflows used in modern auto shops.",
  },
  {
    slug: "electrical-installation-and-maintenance",
    category: "Engineering",
    title: "Electrical Installation and Maintenance",
    description:
      "Thorough training in electrical systems, wiring, and safety protocols for residential and commercial work.",
    tagOne: "SAFETY-LED",
    tagTwo: "CORE TRADE",
    image: "/asset/electricals.png",
    duration: "Certificate track",
    format: "Lab + field simulation",
    careerPaths: ["Electrical technician", "Maintenance electrician", "Installation assistant"],
    outcomes: ["Wiring practice", "Circuit fundamentals", "Electrical safety procedures"],
    overview:
      "This program blends theory and practice so students can install, troubleshoot, and maintain basic electrical systems with a strong emphasis on safety compliance.",
  },
  {
    slug: "plumbing-and-pipeline-services",
    category: "Engineering",
    title: "Plumbing and Pipeline Services",
    description:
      "Covers modern plumbing techniques, pipe installation, and water system maintenance.",
    tagOne: "UTILITY SYSTEMS",
    image: "/asset/plumbing.png",
    duration: "Certificate track",
    format: "Workshop + systems installation practice",
    careerPaths: ["Plumber", "Pipeline installer", "Maintenance technician"],
    outcomes: ["Pipe fitting", "Drainage systems", "Water system servicing"],
    overview:
      "Students learn domestic and light commercial plumbing systems, installation standards, repairs, leak detection, and maintenance workflows.",
  },
  {
    slug: "hvac-systems-technology",
    category: "Engineering",
    title: "HVAC Systems Technology",
    description:
      "Master heating, ventilation, and air conditioning systems installation and maintenance, including energy-efficient technologies.",
    tagOne: "CLIMATE SYSTEMS",
    image: "/asset/hvac.png",
    duration: "Certificate track",
    format: "Lab + equipment servicing",
    careerPaths: ["HVAC technician", "Cooling systems installer", "Maintenance specialist"],
    outcomes: ["System installation", "Cooling diagnostics", "Preventive maintenance"],
    overview:
      "This program introduces climate-control systems, servicing methods, installation procedures, and efficient maintenance routines used across homes and businesses.",
  },
  {
    slug: "welding-and-fabrication",
    category: "Engineering",
    title: "Welding and Fabrication",
    description:
      "Hands-on program teaching various welding techniques and metal fabrication skills with modern equipment.",
    tagOne: "METALWORK",
    image: "/asset/welding.png",
    duration: "Certificate track",
    format: "Workshop intensive",
    careerPaths: ["Welder", "Fabricator", "Metalwork technician"],
    outcomes: ["Arc welding basics", "Fabrication layout", "Metal finishing"],
    overview:
      "Learners build practical competence in welding safety, fabrication planning, cutting, joining, and finishing for real production environments.",
  },
  {
    slug: "carpentry-and-joinery",
    category: "Engineering",
    title: "Carpentry and Joinery",
    description:
      "Combines traditional woodworking techniques with modern construction methods for furniture making and construction carpentry.",
    tagOne: "WOODWORK",
    image: "/asset/carpentry.png",
    duration: "Certificate track",
    format: "Workshop + build projects",
    careerPaths: ["Carpenter", "Joiner", "Furniture production assistant"],
    outcomes: ["Woodworking tools", "Joinery basics", "Cabinet and frame construction"],
    overview:
      "Students learn workshop discipline, timber handling, tool use, joinery methods, and the fundamentals of furniture and building carpentry.",
  },
  {
    slug: "health-and-safety-education-hse",
    category: "Health & Safety",
    title: "Health and Safety Education (HSE)",
    description:
      "Essential workplace health and safety standards, risk assessment, and compliance training.",
    tagOne: "COMPLIANCE",
    image: "/asset/hero-programs.jpg",
    duration: "Short professional track",
    format: "Classroom + case-based learning",
    careerPaths: ["HSE officer", "Compliance assistant", "Safety supervisor trainee"],
    outcomes: ["Risk assessment", "Incident prevention", "Workplace safety culture"],
    overview:
      "This course equips learners with core health, safety, and compliance principles needed for responsible operations across industrial and service environments.",
  },
  {
    slug: "cybersecurity-fundamentals",
    category: "Digital Technology",
    title: "Cybersecurity Fundamentals",
    description:
      "Cutting-edge program addressing the growing demand for cybersecurity professionals, covering network security and threat assessment.",
    tagOne: "SECURITY",
    image: "/asset/cyber.png",
    duration: "Certificate track",
    format: "Lab + guided simulations",
    careerPaths: ["Security analyst trainee", "IT support security assistant", "SOC pathway starter"],
    outcomes: ["Threat awareness", "Basic network security", "Security best practices"],
    overview:
      "Students explore core cyber hygiene, network defense concepts, threat identification, and the practical habits needed for secure digital operations.",
  },
  {
    slug: "computer-system-repairs-and-maintenance",
    category: "Digital Technology",
    title: "Computer System Repairs and Maintenance",
    description:
      "Master hardware troubleshooting, system optimization, and computer maintenance, preparing graduates for technical support roles.",
    tagOne: "IT SUPPORT",
    image: "/asset/computrt-repairs.png",
    duration: "Certificate track",
    format: "Hands-on lab",
    careerPaths: ["Computer technician", "Helpdesk support", "Hardware support assistant"],
    outcomes: ["Hardware diagnostics", "System maintenance", "Basic repair workflow"],
    overview:
      "This program builds practical troubleshooting ability for desktops and related systems, with emphasis on diagnostics, repair habits, and maintenance efficiency.",
  },
  {
    slug: "digital-marketing-strategies",
    category: "Digital Technology",
    title: "Digital Marketing Strategies",
    description:
      "Covers social media marketing, content creation, and online advertising strategies for business growth.",
    tagOne: "MARKETING",
    image: "/asset/digital-marketing.png",
    duration: "Certificate track",
    format: "Studio + campaign exercises",
    careerPaths: ["Digital marketer", "Content assistant", "Social media coordinator"],
    outcomes: ["Content planning", "Campaign basics", "Audience targeting"],
    overview:
      "Learners study the foundations of online visibility, campaign planning, social media execution, and performance-oriented marketing tactics.",
  },
  {
    slug: "data-analytics-and-business-intelligence",
    category: "Digital Technology",
    title: "Data Analytics and Business Intelligence",
    description:
      "Teaches students to collect, analyze, and interpret data for business decision-making.",
    tagOne: "ANALYTICS",
    image: "/asset/data-analytics.png",
    duration: "Certificate track",
    format: "Lab + project-based learning",
    careerPaths: ["Data analyst trainee", "Reporting assistant", "Operations analyst pathway"],
    outcomes: ["Data cleaning", "Dashboard thinking", "Insight communication"],
    overview:
      "This course introduces learners to practical analytics workflows, reporting logic, and data storytelling for informed business decisions.",
  },
  {
    slug: "web-development",
    category: "Digital Technology",
    title: "Web Development",
    description:
      "Learn modern web design and development with HTML, CSS, JavaScript, and frameworks.",
    tagOne: "WEB SKILLS",
    image: "/asset/web-design-SGT.jpg",
    duration: "Certificate track",
    format: "Build-based coding labs",
    careerPaths: ["Frontend developer trainee", "Web designer", "Junior web support"],
    outcomes: ["Responsive pages", "Frontend fundamentals", "Website deployment basics"],
    overview:
      "Students learn how modern websites are structured, styled, and deployed, with emphasis on practical portfolio-ready build work.",
  },
  {
    slug: "fashion-design-and-tailoring",
    category: "Creative & Hospitality",
    title: "Fashion Design and Tailoring",
    description:
      "Develop skills in garment construction, pattern making, and fashion design, combining traditional and contemporary trends.",
    tagOne: "CREATIVE TRADE",
    image: "/asset/fashion-design.png",
    duration: "Certificate track",
    format: "Studio + practical production",
    careerPaths: ["Tailor", "Fashion assistant", "Garment production specialist"],
    outcomes: ["Pattern drafting", "Garment construction", "Finishing techniques"],
    overview:
      "This track helps learners turn design ideas into finished garments through pattern work, sewing discipline, and production-focused practice.",
  },
  {
    slug: "catering-and-hospitality-management",
    category: "Creative & Hospitality",
    title: "Catering and Hospitality Management",
    description:
      "Comprehensive program covering food preparation, service excellence, and hospitality business management.",
    tagOne: "HOSPITALITY",
    image: "/asset/catering.png",
    duration: "Certificate track",
    format: "Kitchen lab + service training",
    careerPaths: ["Caterer", "Hospitality assistant", "Food service supervisor trainee"],
    outcomes: ["Food prep", "Customer service", "Operations basics"],
    overview:
      "Students gain practical grounding in kitchen operations, food handling, hospitality standards, and service delivery.",
  },
  {
    slug: "photography-and-visual-arts",
    category: "Creative & Hospitality",
    title: "Photography and Visual Arts",
    description:
      "Learn traditional and digital photography techniques, including photo editing and visual storytelling.",
    tagOne: "VISUAL ARTS",
    image: "/asset/photography.png",
    duration: "Certificate track",
    format: "Studio + editing workflow",
    careerPaths: ["Photographer", "Visual content creator", "Studio assistant"],
    outcomes: ["Camera basics", "Composition", "Photo editing fundamentals"],
    overview:
      "The course develops practical visual storytelling ability through shooting practice, composition, editing, and creative project work.",
  },
  {
    slug: "videography-and-media-production",
    category: "Creative & Hospitality",
    title: "Videography and Media Production",
    description:
      "Teaches video production, editing, and media content creation with professional equipment.",
    tagOne: "MEDIA",
    image: "/asset/videography.png",
    duration: "Certificate track",
    format: "Production lab + editing projects",
    careerPaths: ["Videographer", "Media editor", "Content production assistant"],
    outcomes: ["Shot planning", "Editing basics", "Production workflow"],
    overview:
      "Learners explore end-to-end video creation from planning and shooting to editing and final delivery for digital platforms.",
  },
  {
    slug: "renewable-energy-systems",
    category: "Emerging Technologies",
    title: "Renewable Energy Systems",
    description:
      "Learn solar panel installation, wind energy systems, and sustainable energy technologies for the growing renewable energy sector.",
    tagOne: "FUTURE-FOCUSED",
    image: "/asset/energy.png",
    duration: "Certificate track",
    format: "Lab + applied system basics",
    careerPaths: ["Solar installer trainee", "Energy systems assistant", "Sustainability technician pathway"],
    outcomes: ["Solar basics", "Energy system awareness", "Installation principles"],
    overview:
      "This program introduces sustainable power technologies with practical emphasis on installation basics, maintenance awareness, and energy-use thinking.",
  },
  {
    slug: "animal-husbandry-and-agricultural-technology",
    category: "Emerging Technologies",
    title: "Animal Husbandry and Agricultural Technology",
    description:
      "Combines traditional animal care with modern agricultural practices, including livestock management and agricultural business principles.",
    tagOne: "AGRIC-TECH",
    image: "/asset/animal-husbandry.png",
    duration: "Certificate track",
    format: "Practical field-based learning",
    careerPaths: ["Farm operations assistant", "Livestock technician trainee", "Agri-business support"],
    outcomes: ["Livestock care", "Farm management basics", "Agricultural operations awareness"],
    overview:
      "Students gain a balanced introduction to animal care, modern farm practice, and applied agricultural management for productive rural enterprise.",
  },
]

export const programBySlug = new Map(programs.map((program) => [program.slug, program]))
