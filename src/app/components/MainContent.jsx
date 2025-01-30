import {
  Ship,
  Shield,
  Globe,
  BookOpen,
  AlertCircle,
  BarChart,
  Award,
  Users,
  ArrowRight,
  Anchor,
  Wind,
  Compass,
  Navigation,
  LifeBuoy,
  Radio,
  MapPin,
  ChevronRight,
  FileText,
} from "lucide-react";

export default function MainContent() {
  return (
    <main className="min-h-screen ">
      <CompanyOverview />
      <Solutions />
      <LatestUpdates />
      <KeyTopics />
      <Statistics />
      <GlobalPresence />
      <Resources />
    </main>
  );
}

function CompanyOverview() {
  return (
    <section className=" mx-auto py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1350px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-600 font-semibold">
                Maritime Excellence Since 2005
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
              Pioneering Maritime Technology for a{" "}
              <span className="text-blue-600 text-4xl font-bold">Safer</span>{" "}
              and{" "}
              <span className="text-blue-600 text-4xl font-bold">
                Sustainable
              </span>{" "}
              Future
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over two decades, SYNIMAC GEXAS has been revolutionizing
              maritime operations through cutting-edge technology and innovative
              solutions. Our commitment to excellence has made us a trusted
              partner in maritime safety and environmental protection.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <Ship className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Global Network</h3>
                  <p className="text-gray-600">Presence in 150+ countries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">ISO Certified</h3>
                  <p className="text-gray-600">27001 & 9001 certified</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606768666853-403c90a981ad"
              alt="Maritime Technology"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">20+</p>
              <p className="text-lg">Years of Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const solutions = [
    {
      icon: <Anchor className="h-8 w-8" />,
      title: "Vessel Management",
      description: "Comprehensive fleet monitoring and management solutions",
      image: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Environmental Systems",
      description: "Advanced emission control and environmental protection",
      image: "https://images.unsplash.com/photo-1534854638093-bada1813ca19",
    },
    {
      icon: <Navigation className="h-8 w-8" />,
      title: "Navigation Tech",
      description: "State-of-the-art navigation and positioning systems",
      image: "https://images.unsplash.com/photo-1516357231954-91487b459602",
    },
  ];

  return (
    <section className="max-w-[1350px] mx-auto  py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Innovative Maritime Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Discover our comprehensive range of maritime technology solutions
            designed to enhance safety, efficiency, and sustainability in
            maritime operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-blue-600 p-3 rounded-lg inline-block mb-3">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                </div>
              </div>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestUpdates() {
  const updates = [
    {
      date: "January 30, 2025",
      category: "Technology",
      title: "Next-Gen Vessel Monitoring System Launch",
      description:
        "Revolutionary AI-powered monitoring system for enhanced maritime safety and efficiency.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      date: "January 28, 2025",
      category: "Environment",
      title: "Zero-Emission Technology Partnership",
      description:
        "Collaboration with leading shipyards for sustainable maritime solutions.",
      image: "https://images.unsplash.com/photo-1498354178607-a79df2916198",
    },
    {
      date: "January 25, 2025",
      category: "Innovation",
      title: "Smart Port Initiative Launch",
      description:
        "Digital transformation project for major Asian ports using IoT technology.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    },
  ];

  return (
    <section className="  py-24 bg-gray-50">
      <div className="max-w-[1350px] container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Latest Updates</h2>
          <a
            href="#"
            className="group flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View all news
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {update.category}
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm text-blue-600 mb-2 font-medium">
                  {update.date}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-6">{update.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyTopics() {
  return (
    <section className="  py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="max-w-[1350px] mx-auto  container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Key Focus Areas</h2>
          <p className="text-lg text-blue-100">
            Driving innovation across critical maritime sectors through advanced
            technology and sustainable solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="h-12 w-12" />,
              title: "Maritime Security",
              description: "Advanced security solutions for vessels and ports",
              link: "#",
            },
            {
              icon: <Globe className="h-12 w-12" />,
              title: "Environmental Protection",
              description: "Sustainable maritime practices and technologies",
              link: "#",
            },
            {
              icon: <BarChart className="h-12 w-12" />,
              title: "Digital Transformation",
              description: "Next-generation maritime technology solutions",
              link: "#",
            },
            {
              icon: <Radio className="h-12 w-12" />,
              title: "Emergency Response",
              description: "24/7 maritime emergency support systems",
              link: "#",
            },
          ].map((topic, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-colors cursor-pointer group"
            >
              <div className="text-blue-300 mb-6 group-hover:text-blue-200 transition-colors">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{topic.title}</h3>
              <p className="text-blue-100 mb-6">{topic.description}</p>
              <a
                href={topic.link}
                className="inline-flex items-center text-blue-300 hover:text-blue-200"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section
      className=" py-24 bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5')",
      }}
    >
      <div className=" absolute inset-0 bg-blue-900/90 backdrop-blur-sm" />
      <div className="max-w-[1350px] mx-auto  container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          {[
            {
              number: "150+",
              label: "Countries Served",
              icon: <MapPin className="h-8 w-8" />,
            },
            {
              number: "1000+",
              label: "Vessels Protected",
              icon: <Ship className="h-8 w-8" />,
            },
            {
              number: "20+",
              label: "Years Experience",
              icon: <Award className="h-8 w-8" />,
            },
            {
              number: "24/7",
              label: "Support Available",
              icon: <LifeBuoy className="h-8 w-8" />,
            },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-blue-300 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section className="max-w-[1350px] mx-auto  py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Global Presence, Local Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With operations in over 150 countries and strategic partnerships
              worldwide, we provide localized support while maintaining global
              standards of excellence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { region: "Asia Pacific", ports: "45+ Ports" },
                { region: "Europe", ports: "60+ Ports" },
                { region: "Americas", ports: "35+ Ports" },
                { region: "Middle East", ports: "20+ Ports" },
              ].map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{location.region}</h3>
                  <p className="text-blue-600">{location.ports}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488998527040-85054a85150e"
              alt="Global Operations"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="max-w-[1350px] mx-auto  py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Resource Cards */}
          <div>
            <div className="mb-12">
              <span className="inline-block bg-white px-4 py-2 rounded-full shadow-sm text-blue-600 font-semibold mb-4">
                Resources & Documentation
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Maritime Technology Resources
              </h2>
              <p className="text-lg text-gray-600">
                Access our comprehensive collection of technical documentation,
                training materials, and certification programs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <BookOpen className="h-6 w-6" />,
                  title: "Technical Documentation",
                  items: [
                    "Maritime Safety Guidelines",
                    "Environmental Compliance Docs",
                    "Technical Specifications",
                    "Implementation Guides",
                  ],
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Training & Development",
                  items: [
                    "Professional Certification Programs",
                    "Online Training Modules",
                    "Workshop Materials",
                    "Skills Assessment Tools",
                  ],
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Certifications & Standards",
                  items: [
                    "Industry Certifications",
                    "Compliance Standards",
                    "Quality Assurance",
                    "Best Practices",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-blue-600">{category.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold ml-4">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Access & Stats */}
          <div className="space-y-8">
            {/* Quick Access Card */}
            <div className="bg-blue-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Access</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <FileText className="h-8 w-8" />,
                    label: "Document Library",
                    count: "2,500+",
                  },
                  {
                    icon: <BookOpen className="h-8 w-8" />,
                    label: "Training Courses",
                    count: "150+",
                  },
                  {
                    icon: <Award className="h-8 w-8" />,
                    label: "Certifications",
                    count: "50+",
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    label: "Expert Trainers",
                    count: "100+",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <div className="text-blue-300 mb-2">{item.icon}</div>
                    <div className="text-2xl font-bold mb-1">{item.count}</div>
                    <div className="text-sm text-blue-100">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Resources */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Featured Resources</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Maritime Safety Manual 2025",
                    type: "PDF Document",
                    size: "8.5 MB",
                  },
                  {
                    title: "Environmental Compliance Guide",
                    type: "Online Course",
                    size: "12 Modules",
                  },
                  {
                    title: "Technical Standards Update",
                    type: "Documentation",
                    size: "24 Pages",
                  },
                ].map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {resource.title}
                      </h4>
                      <p className="text-sm text-gray-500">{resource.type}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-4">
                        {resource.size}
                      </span>
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="mt-6 inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Resources <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
